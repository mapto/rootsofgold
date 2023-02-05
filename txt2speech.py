#!/usr/bin/env python3
"""
Sample input csv can be downloaded from:
See https://docs.google.com/spreadsheets/d/1N2TX5G59T9z6tlyIEbXTSZCaHk09DXstBK6leT2r4Mk/edit

CSV format description:
- 0 id
- 1 text
- 2 role
- 3 type
- 4 left_text
- 5 left_sequel
- 6 left_keywords
- 7 right_text
- 8 right_sequel
- 9 right_keywords
"""
from typing import Dict, Tuple

import os
import csv
import requests
import shutil

voices = {
    "dagon": "VR6AewLTigWG4xSOukaG",  # "Arnold",
    "quinn": "AZnzlk1XvdvUeBnXmlld",  # "Domi",
    "happyend": "pNInz6obpgDQGcFmaJgB",  # "Adam",
    "badend": "pNInz6obpgDQGcFmaJgB",  #  "Adam",
    "robot": "pNInz6obpgDQGcFmaJgB",  #  "Adam",
    "player": "TxGEqnHWrfWFTfGW9XjX",  # "Josh"
}


cache: Dict[Tuple[str,str],str] = {}

from secret import api_key


def build(s: str, r: str, address: str):
    """From https://stackoverflow.com/a/53101953/1827854"""
    # local_filename = f"{address.strip()}-{r.strip()}.mp3"
    local_filename = f"{address.strip()}.mp3"

    if (s.strip(),r.strip()) in cache:
        shutil.copyfile(cache[(s.strip(),r.strip())], local_filename)
        print(f"Copying {cache[(s.strip(),r.strip())]} to {local_filename}")
        return local_filename
    cache[(s.strip(),r.strip())] = local_filename

    if os.path.exists(local_filename):
        print(f"Skipping {local_filename}")
        return local_filename

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voices[r.strip()]}"
    headers = {"xi-api-key": api_key}
    body = {"text": s.strip()}
    response = requests.post(url, headers=headers, json=body)

    totalbits = 0
    if response.status_code == 200:
        with open(local_filename, "wb") as f:
            for chunk in response.iter_content(chunk_size=1024):
                if chunk:
                    totalbits += 1024
                    print(f"Downloaded {local_filename} ({totalbits*1025}KB)...")
                    f.write(chunk)

    return local_filename


if __name__ == "__main__":
    # with open("game/stories/rootsofgold/story.short.csv") as csvfile:
    with open("game/stories/rootsofgold/story.csv") as csvfile:
        spamreader = csv.reader(csvfile)
        title = True
        present = []
        for row in spamreader:
            if title:
                title = False
                continue
            if not row[0] or not row[0].strip():
                continue
            print(row)
            build(row[1], row[2], row[0])
            build(row[4], "player", f"{row[0]}l")
            build(row[7], "player", f"{row[0]}r")
