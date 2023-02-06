The story is exported from [the online version](https://docs.google.com/spreadsheets/d/1N2TX5G59T9z6tlyIEbXTSZCaHk09DXstBK6leT2r4Mk/edit#gid=944855733). The visualisation below was made with the [csv2mermaid.py](https://github.com/mapto/trustyjohn/blob/main/csv2mermaid.py) script and[mermaid](https://mermaid-js.github.io/mermaid/#/). It is also present as an image in [./story.png].

```mermaid
flowchart TD
	subgraph Intro
		0["<strong>robot</strong>: Hello Jenkins, welcome back. Dagon wants to speak with\nyou immediately"] -->|"Let him in"| 1
		0 -->|"What does he want?"| 1
		1["<strong>dagon</strong>: Jenkins! We finally finished preparations to mine the\nroots of the Giant Tree"] -->|"It was about time"| 2
		1 -->|"So what's next?"| 2
		2["<strong>dagon</strong>: I'm assigning you as head of the project"] -->|"Ok, what do I have to do?"| 3
		2 -->|"I'm honored"| 3
		3["<strong>dagon</strong>: Those damn regulators will only let us dig five sectors"] -->|"Damn bureaucrats"| 4
		3 -->|"Maybe there's a reason"| 4
		4["<strong>dagon</strong>: That's not all... We also have to work with some stupid\ngeologist"] -->|"What for?"| 5
		4 -->|"Who is this geologist?"| 5
		5["<strong>quinn</strong>: It's actually 'arborist', Dagon. "] -->|"Who might you be?"| 6
		5 -->|"Who are you?"| 6
		6["<strong>quinn</strong>: Nice to meet you, my name is Quinn and I am an expert on\ntrees"] -->|"I hope you won't be a pain"| 10
		6 -->|"I'm looking forward to working with you"| 10
	end
	subgraph SE_sector
		10["<strong>quinn</strong>: Our analysis suggest that we can try to mine some of the\nroots of the Giant Tree to study it without any risks."] -->|"Sounds good"| 11
		10 -->|"Got it"| 11
		11["<strong>dagon</strong>: We could start from the South East sector. This way we\nare away from the city's eyes and avoid any unnecessary fuss."] -->|"Good point"| 13
		11 -->|"Why would we want to hide?"| 12
		12["<strong>dagon</strong>: We're not hiding, we are just cautious"] -->|"Ok"| 13
		12 -->|"I see"| 13
		13["<strong>quinn</strong>: I agree about the South East sector, it is a good idea\nto start from a corner and have less impact on the tree"] -->|"Ok, let's move"| 20
		13 -->|"Let's do this"| 20
		20["<strong>quinn</strong>: It all seems to have gone nicely. There is no risk for\nthe tree."] -->|"Good job"| 7
		20 -->|"Well done"| 7
	end
	subgraph Decision_1
		7["<strong>quinn</strong>: I've looked at the situation and the North and Eastern\nsectors are dangerous to mine"] -->|"Let's mine the others then"| 8
		7 -->|"What about the others?"| 8
		8["<strong>dagon</strong>: Hold on! The other sectors are too close to the city. I\ndon't want another PR nightmare"] -->|"Ok, we mine north to the Eastern sector then"| 40
		8 -->|"Let's be safe and go west to the Southern sector"| 140
	end
	subgraph E_sector
		40["<strong>dagon</strong>: I've already had everything prepared. We can start\ndigging in the Eastern sector immediately."] -->|"If it has to be, let's go there"| 41
		40 -->|"What are you still waiting for"| 41
		41["<strong>dagon</strong>: Things seem very good. The Eastern sector is giving us\nvery good returns."] -->|"Happy to hear the good news"| 42
		41 -->|"What about the tree"| 42
		42["<strong>quinn</strong>: The tree is still stable, but we can see that some\nbranches are starting to dry. This is a very worrying sign"] -->|"It will grow again"| 43
		42 -->|"Do you think it's very bad?"| 44
		43["<strong>dagon</strong>: Of course the tree is fine. Let's move on to the North\nEastern sector. I feel it is full of gold"] -->|"I agree"| 47
		43 -->|"Can we afford to continue now?"| 44
		44["<strong>quinn</strong>: Hard to know. It's not many branches that are suffering,\nbut it is an early sign."] -->|"So it will be fine"| 45
		44 -->|"We need to be very careful"| 46
		45["<strong>dagon</strong>: Of course there's nothing wrong with the Giant Tree. It\nwill outlive us all."] -->|"I think so too"| 48
		45 -->|"Let's be careful"| 46
		46["<strong>dagon</strong>: Ok, we will be careful, but now let's move to the North\nEastern sector."] -->|"Let's go"| 50
		46 -->|"Let me hear Quinn"| 47
		47["<strong>quinn</strong>: I'd be very careful with that."] -->|"What are our options"| 49
		47 -->|"Let's move on and keep digging"| 50
		48["<strong>dagon</strong>: Let's keep on digging... North East it is."] -->|"Do it"| 50
		48 -->|"It's up to Quinn"| 47
		49["<strong>dagon</strong>: We dig North or we dig North. Even if we try digging in\na different direction we risk getting in trouble with protests."] -->|"If North East is what you want, this is what you will get"| 50
		49 -->|"We don't have a choice"| 50
	end
	subgraph NE_sector
		50["<strong>robot</strong>: The North Eastern sector is very rocky. We broke two of\nour diggers until we managed to mine it successfully. We cannot afford digging\nat such cost."] -->|"I shouldn't have listened to Dagon"| 53
		50 -->|"Quinn, give me an update on the tree"| 51
		51["<strong>quinn</strong>: The dried branches are expanding, but I expected worse"] -->|"Well, not really good news"| 55
		51 -->|"At least it seems to be slowing down"| 52
		52["<strong>quinn</strong>: I wouldn't say so, but given what we're doing, it is a\nsort of good news."] -->|"Ok, so now we need to pick the next sector"| 53
		52 -->|"Is there anything we could do for it, other than stop mining?"| 54
		53["<strong>dagon</strong>: Ok, you managed to convince me that it's better changing\nour side"] -->|"Let"| 60
		53 -->|"Quinn, how is the tree?"| 51
		54["<strong>quinn</strong>: Maybe we can try not to expand the current mine, but\nmaybe try approaching it from the North West?"] -->|"Sounds like a good idea"| 60
		54 -->|"I guess this is our only option. Let's do it."| 60
		55["<strong>dagon</strong>: Our job is mining, and that's what we need to do. Let's\nmine in the North Western sector, this sector is next to the slums. The\nactivists don't care about the slums."] -->|"South sector it is, let's get going"| 60
		55 -->|"I don't know. Quinn, do you have any ideas?"| 54
	end
	subgraph NW
		60["<strong>robot</strong>: It seems to be going well. It was a bit rocky, but the\nmachines chewed the rocks like waffers"] -->|"Tell them to hurry up!"| 61
		60 -->|"How much longer do you need?"| 61
		61["<strong>dagon</strong>: They are almost done. Let's start planning our next move"] -->|"I'm listening..."| 62
		61 -->|"Ok..."| 62
		62["<strong>dagon</strong>: Let's go with the Northern sector"] -->|"I agree"| 63
		62 -->|"Let's see what Quinn has to say"| 63
		63["<strong>quinn</strong>: We've already dug the crucial sectors. It's dangerous to\ngo for this one"] -->|"I'm paid to finish my job. We move on!"| 65
		63 -->|"We have one more sector, we cannot give up now."| 64
		64["<strong>quinn</strong>: Ok, let's dig the Western Sector. This way the Giant\nTree will be balanced."] -->|"Let's avoid the activists. Let's go north"| 70
		64 -->|"Seems important."| 80
		65["<strong>dagon</strong>: Then let's get started with the Northern sector"] -->|"Let's do it!"| 70
		65 -->|"Let's go!"| 70
	end
	subgraph Northern
		70["<strong>robot</strong>: We are digging the Northern sector. The rocks are not a\nproblem."] -->|"Way to go"| 71
		70 -->|"Game on"| 71
		71["<strong>quinn</strong>: The tree seems to be fine. We've made it. You've got\nyour gold without destroying the Giant Tree"] -->|"I actually like it working with you!"| 72
		71 -->|"We made it together"| 72
		72["<strong>dagon</strong>: Good job, Jenkins!"] -->|"Looking forward to our next project"| 1000
		72 -->|"Well done to yourself too!"| 1000
	end
	subgraph Western_sector
		80["<strong>robot</strong>: We dug the western sector."] -->|"So we made it?"| 81
		80 -->|"Was that it?"| 81
		81["<strong>dagon</strong>: I'm afraid I have bad news. There is a crowd coming our\nway. I don't know what they want"] -->|"What are we going to do?"| 1001
		81 -->|"Are we at risk?"| 1001
	end
	subgraph S_sector,_path2
		140["<strong>dagon</strong>: I've already had everything prepared. We can start\ndigging in the Sothern sector immediately."] -->|"If it has to be, let's go there"| 141
		140 -->|"What are you still waiting for"| 141
		141["<strong>dagon</strong>: I'm a bit worried. Rumors are spreading, but overall\npeople seem to be relaxed about our work."] -->|"That's rather good news. Don't worry"| 142
		141 -->|"What about the tree"| 142
		142["<strong>quinn</strong>: The tree is still stable, but we can see that some\nbranches are starting to dry. This is a very worrying sign"] -->|"It will grow again"| 143
		142 -->|"Do you think it's very bad?"| 144
		143["<strong>dagon</strong>: Of course the tree is fine. Let's move on to the South\nWestern sector. I feel it is full of gold"] -->|"I agree"| 147
		143 -->|"Can we afford to continue now?"| 144
		144["<strong>quinn</strong>: Hard to know. It's not many branches that are suffering,\nbut it is an early sign."] -->|"So it will be fine"| 145
		144 -->|"We need to be very careful"| 146
		145["<strong>dagon</strong>: Of course there's nothing wrong with the Giant Tree. It\nwill outlive us all."] -->|"I think so too"| 148
		145 -->|"Let's be careful"| 146
		146["<strong>dagon</strong>: Ok, we will be careful, but now let's move to the South\nWestern sector."] -->|"Let's go"| 150
		146 -->|"Let me hear Quinn"| 147
		147["<strong>quinn</strong>: I'd be very careful with that."] -->|"What are our options"| 149
		147 -->|"Let's move on and keep digging"| 150
		148["<strong>dagon</strong>: Let's keep on digging... South Western it is."] -->|"Do it"| 150
		148 -->|"It's up to Quinn"| 147
		149["<strong>dagon</strong>: We dig West or we dig West. Even if we try digging in a\ndifferent direction we risk getting in trouble with protests."] -->|"If South West is what you want, this is what you will get"| 150
		149 -->|"We don't have a choice"| 150
	end
	subgraph South_Western_sector,_path2
		150["<strong>dagon</strong>: The South Western sector is too close to town. People\nare getting nervous, activists are getting a lot of support. This was a mistake."] -->|"I shouldn't have listened to you Dagon"| 153
		150 -->|"Quinn, give me an update on the tree"| 151
		151["<strong>quinn</strong>: The dried branches are expanding, but I expected worse"] -->|"Well, not really good news"| 155
		151 -->|"At least it seems to be slowing down"| 152
		152["<strong>quinn</strong>: I wouldn't say so, but given what we're doing, it is a\nsort of good news."] -->|"Ok, so now we need to pick the next sector"| 153
		152 -->|"Is there anything we could do for it, other than stop mining?"| 154
		153["<strong>dagon</strong>: Ok, you managed to convince me that it's better heading\nsouth."] -->|"South sector it is, let's get going"| 160
		153 -->|"Quinn, how is the tree?"| 151
		154["<strong>quinn</strong>: Maybe we can try not to expand the current mine, but\nmaybe try approaching it from the North West?"] -->|"We must finish up here first"| 160
		154 -->|"It will have to wait"| 160
		155["<strong>dagon</strong>: Our job is mining, and that's what we need to do. Let's\nmine in the North Western sector, this sector is next to the slums. The\nactivists don't care about the slums."] -->|"South sector it is, let's get going"| 160
		155 -->|"I don't know. Quinn, do you have any ideas?"| 154
	end
	subgraph NW,_path2
		160["<strong>robot</strong>: It seems to be going well. It was a bit rocky, but the\nmachines chewed the rocks like waffers"] -->|"Tell them to hurry up!"| 161
		160 -->|"How much longer do you need?"| 161
		161["<strong>dagon</strong>: They are almost done. Let's start planning our next move"] -->|"I'm listening..."| 162
		161 -->|"Ok..."| 162
		162["<strong>dagon</strong>: Let's go with the Northern sector"] -->|"I agree"| 163
		162 -->|"Let's see what Quinn has to say"| 163
		163["<strong>quinn</strong>: We've already dug the crucial sectors. It's dangerous to\ngo for this one"] -->|"I'm paid to finish my job. We move on!"| 165
		163 -->|"We have one more sector, we cannot give up now."| 164
		164["<strong>quinn</strong>: Ok, let's dig the Western Sector. This way the Giant\nTree will be balanced."] -->|"Let's avoid the activists. Let's go north"| 170
		164 -->|"Seems important."| 180
		165["<strong>dagon</strong>: Then let's get started with the Northern sector"] -->|"Let's do it!"| 170
		165 -->|"Let's go!"| 170
	end
	subgraph Western,_path2
		170["<strong>robot</strong>: We are digging the Western sector. The rocks are not a\nproblem."] -->|"Way to go"| 171
		170 -->|"Game on"| 171
		171["<strong>quinn</strong>: The tree seems to be fine. We've made it. You've got\nyour gold without destroying the Giant Tree"] -->|"I actually like it working with you!"| 172
		171 -->|"We made it together"| 172
		172["<strong>dagon</strong>: Good job, Jenkins!"] -->|"Looking forward to our next project"| 1000
		172 -->|"Well done to yourself too!"| 1000
	end
	subgraph Northern_sector,_path2
		180["<strong>robot</strong>: We dug the Northern sector."] -->|"So we made it?"| 181
		180 -->|"Was that it?"| 181
		181["<strong>dagon</strong>: I'm afraid I have bad news. There is a crowd coming our\nway. I don't know what they want"] -->|"What are we going to do?"| 1001
		181 -->|"Are we at risk?"| 1001
	end
	subgraph Endgame
		1002["<strong>robot</strong>: They are preparing to evacuate the city. Dagon seems to\nbe fleeing the country."] --> 0
		1002 --> 0
		1001["<strong>robot</strong>: The activists have surrounded our headquarters. We are\nstopping all operations."] --> 0
		1001 --> 0
		1000["<strong>robot</strong>: Good job! We mined as much as we could. Dagon said\nyou'll be getting a fat bonus."] --> 0
		1000 --> 0
	end
```