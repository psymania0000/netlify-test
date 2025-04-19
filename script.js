// ESV 성경 요한복음 1장 데이터
const john1 = [
    "In the beginning was the Word, and the Word was with God, and the Word was God.",
    "He was in the beginning with God.",
    "All things were made through him, and without him was not any thing made that was made.",
    "In him was life, and the life was the light of men.",
    "The light shines in the darkness, and the darkness has not overcome it.",
    "There was a man sent from God, whose name was John.",
    "He came as a witness, to bear witness about the light, that all might believe through him.",
    "He was not the light, but came to bear witness about the light.",
    "The true light, which gives light to everyone, was coming into the world.",
    "He was in the world, and the world was made through him, yet the world did not know him.",
    "He came to his own, and his own people did not receive him.",
    "But to all who did receive him, who believed in his name, he gave the right to become children of God,",
    "who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.",
    "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
    "John bore witness about him, and cried out, 'This was he of whom I said, He who comes after me ranks before me, because he was before me.'",
    "For from his fullness we have all received, grace upon grace.",
    "For the law was given through Moses; grace and truth came through Jesus Christ.",
    "No one has ever seen God; the only God, who is at the Father's side, he has made him known.",
    "And this is the testimony of John, when the Jews sent priests and Levites from Jerusalem to ask him, 'Who are you?'",
    "He confessed, and did not deny, but confessed, 'I am not the Christ.'",
    "And they asked him, 'What then? Are you Elijah?' He said, 'I am not.' 'Are you the Prophet?' And he answered, 'No.'",
    "So they said to him, 'Who are you? We need to give an answer to those who sent us. What do you say about yourself?'",
    "He said, 'I am the voice of one crying out in the wilderness, Make straight the way of the Lord, as the prophet Isaiah said.'",
    "Now they had been sent from the Pharisees.",
    "They asked him, 'Then why are you baptizing, if you are neither the Christ, nor Elijah, nor the Prophet?'",
    "John answered them, 'I baptize with water, but among you stands one you do not know,'",
    "even he who comes after me, the strap of whose sandal I am not worthy to untie.",
    "These things took place in Bethany across the Jordan, where John was baptizing.",
    "The next day he saw Jesus coming toward him, and said, 'Behold, the Lamb of God, who takes away the sin of the world!'",
    "This is he of whom I said, 'After me comes a man who ranks before me, because he was before me.'",
    "I myself did not know him, but for this purpose I came baptizing with water, that he might be revealed to Israel.",
    "And John bore witness: 'I saw the Spirit descend from heaven like a dove, and it remained on him.'",
    "I myself did not know him, but he who sent me to baptize with water said to me, 'He on whom you see the Spirit descend and remain, this is he who baptizes with the Holy Spirit.'",
    "And I have seen and have borne witness that this is the Son of God.",
    "The next day again John was standing with two of his disciples,",
    "and he looked at Jesus as he walked by and said, 'Behold, the Lamb of God!'",
    "The two disciples heard him say this, and they followed Jesus.",
    "Jesus turned and saw them following and said to them, 'What are you seeking?' And they said to him, 'Rabbi' (which means Teacher), 'where are you staying?'",
    "He said to them, 'Come and you will see.' So they came and saw where he was staying, and they stayed with him that day, for it was about the tenth hour.",
    "One of the two who heard John speak and followed Jesus was Andrew, Simon Peter's brother.",
    "He first found his own brother Simon and said to him, 'We have found the Messiah' (which means Christ).",
    "He brought him to Jesus. Jesus looked at him and said, 'You are Simon the son of John? You shall be called Cephas' (which means Peter).",
    "The next day Jesus decided to go to Galilee. He found Philip and said to him, 'Follow me.'",
    "Now Philip was from Bethsaida, the city of Andrew and Peter.",
    "Philip found Nathanael and said to him, 'We have found him of whom Moses in the Law and also the prophets wrote, Jesus of Nazareth, the son of Joseph.'",
    "Nathanael said to him, 'Can anything good come out of Nazareth?' Philip said to him, 'Come and see.'",
    "Jesus saw Nathanael coming toward him and said of him, 'Behold, an Israelite indeed, in whom there is no deceit!'",
    "Nathanael said to him, 'How do you know me?' Jesus answered him, 'Before Philip called you, when you were under the fig tree, I saw you.'",
    "Nathanael answered him, 'Rabbi, you are the Son of God! You are the King of Israel!'",
    "Jesus answered him, 'Because I said to you, I saw you under the fig tree, do you believe? You will see greater things than these.'",
    "And he said to him, 'Truly, truly, I say to you, you will see heaven opened, and the angels of God ascending and descending on the Son of Man.'"
];

// 성경 데이터
const bibleData = {
    ESV: {
        john1: john1
    },
    NIV: {
        john1: [
            "In the beginning was the Word, and the Word was with God, and the Word was God.",
            "He was with God in the beginning.",
            "Through him all things were made; without him nothing was made that has been made.",
            "In him was life, and that life was the light of all mankind.",
            "The light shines in the darkness, and the darkness has not overcome it.",
            "There was a man sent from God whose name was John.",
            "He came as a witness to testify concerning that light, so that through him all might believe.",
            "He himself was not the light; he came only as a witness to the light.",
            "The true light that gives light to everyone was coming into the world.",
            "He was in the world, and though the world was made through him, the world did not recognize him.",
            "He came to that which was his own, but his own did not receive him.",
            "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God—",
            "children born not of natural descent, nor of human decision or a husband's will, but born of God.",
            "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.",
            "John testified concerning him. He cried out, saying, 'This is the one I spoke about when I said, He who comes after me has surpassed me because he was before me.'",
            "Out of his fullness we have all received grace in place of grace already given.",
            "For the law was given through Moses; grace and truth came through Jesus Christ.",
            "No one has ever seen God, but the one and only Son, who is himself God and is in closest relationship with the Father, has made him known.",
            "Now this was John's testimony when the Jewish leaders in Jerusalem sent priests and Levites to ask him who he was.",
            "He did not fail to confess, but confessed freely, 'I am not the Messiah.'",
            "They asked him, 'Then who are you? Are you Elijah?' He said, 'I am not.' 'Are you the Prophet?' He answered, 'No.'",
            "Finally they said, 'Who are you? Give us an answer to take back to those who sent us. What do you say about yourself?'",
            "John replied in the words of Isaiah the prophet, 'I am the voice of one calling in the wilderness, Make straight the way for the Lord.'",
            "Now the Pharisees who had been sent",
            "questioned him, 'Why then do you baptize if you are not the Messiah, nor Elijah, nor the Prophet?'",
            "'I baptize with water,' John replied, 'but among you stands one you do not know.'",
            "He is the one who comes after me, the straps of whose sandals I am not worthy to untie.",
            "This all happened at Bethany on the other side of the Jordan, where John was baptizing.",
            "The next day John saw Jesus coming toward him and said, 'Look, the Lamb of God, who takes away the sin of the world!'",
            "This is the one I meant when I said, 'A man who comes after me has surpassed me because he was before me.'",
            "I myself did not know him, but the reason I came baptizing with water was that he might be revealed to Israel.",
            "Then John gave this testimony: 'I saw the Spirit come down from heaven as a dove and remain on him.'",
            "And I myself did not know him, but the one who sent me to baptize with water told me, 'The man on whom you see the Spirit come down and remain is the one who will baptize with the Holy Spirit.'",
            "I have seen and I testify that this is God's Chosen One.",
            "The next day John was there again with two of his disciples.",
            "When he saw Jesus passing by, he said, 'Look, the Lamb of God!'",
            "When the two disciples heard him say this, they followed Jesus.",
            "Turning around, Jesus saw them following and asked, 'What do you want?' They said, 'Rabbi' (which means 'Teacher'), 'where are you staying?'",
            "'Come,' he replied, 'and you will see.' So they went and saw where he was staying, and they spent that day with him. It was about four in the afternoon.",
            "Andrew, Simon Peter's brother, was one of the two who heard what John had said and who had followed Jesus.",
            "The first thing Andrew did was to find his brother Simon and tell him, 'We have found the Messiah' (that is, the Christ).",
            "And he brought him to Jesus. Jesus looked at him and said, 'You are Simon son of John. You will be called Cephas' (which, when translated, is Peter).",
            "The next day Jesus decided to leave for Galilee. Finding Philip, he said to him, 'Follow me.'",
            "Philip, like Andrew and Peter, was from the town of Bethsaida.",
            "Philip found Nathanael and told him, 'We have found the one Moses wrote about in the Law, and about whom the prophets also wrote—Jesus of Nazareth, the son of Joseph.'",
            "'Nazareth! Can anything good come from there?' Nathanael asked. 'Come and see,' said Philip.",
            "When Jesus saw Nathanael approaching, he said of him, 'Here truly is an Israelite in whom there is no deceit.'",
            "'How do you know me?' Nathanael asked. Jesus answered, 'I saw you while you were still under the fig tree before Philip called you.'",
            "Then Nathanael declared, 'Rabbi, you are the Son of God; you are the king of Israel.'",
            "Jesus said, 'You believe because I told you I saw you under the fig tree. You will see greater things than that.'",
            "Then he added, 'Very truly I tell you, you will see heaven open, and the angels of God ascending and descending on the Son of Man.'"
        ]
    },
    KRV: {
        john1: [
            "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라",
            "그가 태초에 하나님과 함께 계셨고",
            "만물이 그로 말미암아 지은 바 되었으니 지은 것이 하나도 그가 없이는 된 것이 없느니라",
            "그 안에 생명이 있었으니 이 생명은 사람들의 빛이라",
            "빛이 어둠에 비치되 어둠이 깨닫지 못하더라",
            "하나님께서 보내신 사람이 있으니 그의 이름은 요한이라",
            "그가 증거하러 왔으니 곧 빛에 대하여 증거하고 모든 사람이 자기로 말미암아 믿게 하려 함이라",
            "그는 이 빛이 아니요 이 빛에 대하여 증거하러 온 자라",
            "참 빛 곧 세상에 와서 각 사람에게 비추는 빛이 있었나니",
            "그가 세상에 계셨으며 세상은 그로 말미암아 지은 바 되었으되 세상이 그를 알지 못하였고",
            "자기 땅에 오매 자기 백성이 영접하지 아니하였으나",
            "영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니",
            "이는 혈통으로나 육정으로나 사람의 뜻으로 나지 아니하고 오직 하나님께로서 난 자들이니라",
            "말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라",
            "요한이 그에 대하여 증거하여 외쳐 이르되 내가 전에 말하기를 내 뒤에 오시는 이가 나보다 앞선 것은 나보다 먼저 계심이라 한 것이 이 사람을 가리킴이라 하니라",
            "우리가 다 그의 충만한 데서 받으니 은혜 위에 은혜러라",
            "율법은 모세로 말미암아 주어진 것이요 은혜와 진리는 예수 그리스도로 말미암아 온 것이라",
            "본래 하나님을 본 사람이 없으되 아버지 품 속에 있는 독생하신 하나님이 나타내셨느니라",
            "유대인들이 예루살렘에서 제사장들과 레위인들을 요한에게 보내어 네가 누구냐 물을 때에 요한의 증거가 이러하니라",
            "요한이 드러내어 말하고 숨기지 아니하니 드러내어 하는 말이 나는 그리스도가 아니라 한대",
            "또 묻되 그러면 누구냐 네가 엘리야냐 이르되 나는 아니라 또 묻되 네가 그 선지자냐 대답하되 아니라",
            "또 말하되 누구냐 우리를 보낸 이들에게 대답하게 하라 너는 네게 대하여 무엇이라 하느냐",
            "이르되 나는 선지자 이사야의 말과 같이 주의 길을 곧게 하라고 광야에서 외치는 자의 소리로라 하니라",
            "그들은 바리새인들이 보낸 자라",
            "또 물어 이르되 네가 만일 그리스도도 아니요 엘리야도 아니요 그 선지자도 아닐진대 어찌하여 세례를 베푸느냐",
            "요한이 대답하되 나는 물로 세례를 베풀거니와 너희 가운데 너희가 알지 못하는 한 사람이 섰으니",
            "곧 내 뒤에 오시는 그이라 나는 그의 신발끈을 풀기도 감당하지 못하겠노라 하더라",
            "이 일은 요단강 건너편 베다니에서 일어났는데, 그곳은 요한이 세례를 베풀던 곳이었습니다.",
            "다음 날 요한은 예수님이 자기에게 오시는 것을 보고 말했습니다. '보십시오! 세상의 죄를 지고 가는 하나님의 어린양입니다!",
            "이분이 바로 내가 전에 말했던 분입니다. 내 뒤에 오시는 분이 나보다 앞서신 것은 나보다 먼저 계셨기 때문이라고 말했는데, 바로 이분을 가리켜 한 말입니다.",
            "나도 이분을 알지 못했습니다. 그러나 내가 와서 물로 세례를 베푸는 것은 이분을 이스라엘에 나타내기 위해서입니다.'",
            "요한은 또 증언했습니다. '나는 성령이 비둘기처럼 하늘에서 내려와 이분 위에 머물는 것을 보았습니다.",
            "나는 이분을 알지 못했습니다. 그러나 나를 보내어 물로 세례를 베풀라고 하신 분이 내게 말씀하셨습니다. 성령이 내려와서 누구 위에 머무는 것을 보거든, 그분이 성령으로 세례를 베푸실 분이라고 하셨습니다.",
            "나는 그것을 보았고, 이분이 하나님의 아들이심을 증언하였노라 하니라",
            "다음 날 요한이 자기 제자 두 사람과 함께 서 있다가",
            "예수님이 지나가시는 것을 보고 말하되 보라! 하나님의 어린양이시다!",
            "두 제자는 요한이 하는 말을 듣고 예수님을 따라갔습니다.",
            "예수님이 돌아보시고 그들이 따라오는 것을 보시고 물어 이르시되 무엇을 찾고 있느냐? 이르되 랍비여 어디에 머무르십니까?'",
            "예수께서 이르시되 와서 보아라.' 그래서 그들은 가서 예수님이 계신 곳을 보고 그 날 예수님과 함께 머물렀습니다. 때는 오후 4시쯤이었습니다.",
            "요한의 말을 듣고 예수님을 따라간 두 사람 중 하나는 시몬 베드로의 형제 안드레였습니다.",
            "그는 먼저 자기 형제 시몬을 찾아가서 말했습니다. '우리가 메시야를 만났다!'(메시야는 그리스도라는 뜻입니다)",
            "그리고 시몬을 예수님께 데려왔습니다. 예수님은 시몬을 보시고 말씀하셨습니다. '너는 요한의 아들 시몬이구나. 앞으로는 게바라고 하겠다.'(게바는 베드로라는 뜻입니다)",
            "다음 날 예수께서 갈릴리로 나가려 하시다가 빌립을 만나셨습니다. 예수님이 빌립에게 말씀하셨습니다. '나를 따라오너라.'",
            "빌립은 안드레와 베드로와 같은 동네인 벳새다 출신이었습니다.",
            "빌립이 나다나엘을 찾아가서 말했습니다. '우리가 모세의 율법과 예언자들의 글에 기록된 분을 만났습니다. 나사렛 사람 요셉의 아들 예수님이십니다.'",
            "나다나엘이 말했습니다. '나사렛에서 무슨 선한 것이 날 수 있겠습니까?' 빌립이 대답했습니다. '와서 보십시오.'",
            "예수께서 나다나엘이 자기에게 오는 것을 보시고 그를 가리켜 이르시되 보라, 참으로 순수한 이스라엘 사람이다. 그의 마음에는 거짓이 없다.'",
            "나다나엘이 물었습니다. '어떻게 저를 아십니까?' 예수님이 대답하셨습니다. '빌립이 너를 부르기 전에, 네가 무화과나무 아래에 있을 때 내가 너를 보았다.'",
            "나다나엘이 대답했습니다. '랍비님, 당신은 하나님의 아들이시요 당신은 이스라엘의 임금이로소이다",
            "예수께서 대답하여 이르시되 내가 너를 무화과나무 아래에서 보았다 하므로 믿느냐 이보다 더 큰 일을 보게 될 것이다.'",
            "그리고 말씀하셨습니다. '내가 진실로 진실로 너희에게 말한다. 너희는 하늘이 열리고 하나님의 천사들이 인자 위에 오르락내리락하는 것을 보게 될 것이다.'"
        ]
    },
    EASY: {
        john1: [
            "맨 처음에 말씀이 계셨습니다. 그 말씀은 하나님과 함께 계셨습니다. 그리고 그 말씀은 하나님이셨습니다.",
            "그분은 태초에 하나님과 함께 계셨습니다.",
            "모든 것이 그분을 통하여 만들어졌으며, 그분 없이 만들어진 것은 아무것도 없습니다.",
            "그분 안에 생명이 있었으니, 이 생명은 사람들의 빛이었습니다.",
            "그 빛이 어둠 속에서 비치고 있지만, 어둠이 그 빛을 이해하지 못했습니다.",
            "하나님께서 보내신 한 사람이 있었는데, 그의 이름은 요한이었습니다.",
            "그는 빛에 대해 증언하러 왔습니다. 모든 사람이 자기를 통해 믿게 하기 위해서였습니다.",
            "그는 빛이 아니었고, 다만 그 빛에 대해 증언하러 온 사람이었습니다.",
            "모든 사람에게 비추는 참 빛이 세상에 오고 있었습니다.",
            "그분은 세상에 계셨고, 세상은 그분을 통해 만들어졌지만, 세상은 그분을 알아보지 못했습니다.",
            "그분은 자기 땅에 오셨지만, 자기 백성은 그분을 받아들이지 않았습니다.",
            "하지만 그분을 받아들이고 그분의 이름을 믿는 사람들에게는 하나님의 자녀가 되는 권세를 주셨습니다.",
            "이들은 혈통이나 육체의 뜻으로나 사람의 뜻으로 난 것이 아니라, 하나님에게서 난 사람들입니다.",
            "말씀은 육신이 되어 우리 가운데 사셨습니다. 우리는 그분의 영광을 보았는데, 그것은 아버지의 독생자의 영광이었으며 은혜와 진리가 충만했습니다.",
            "요한은 그분에 대해 증언하며 외쳤습니다. '내가 전에 말했던 분이 바로 이분입니다. 내 뒤에 오시는 분이 나보다 앞서신 것은 나보다 먼저 계셨기 때문입니다.'",
            "우리는 모두 그분의 충만하심에서 은혜에 은혜를 받았습니다.",
            "율법은 모세를 통해 주어졌지만, 은혜와 진리는 예수 그리스도를 통해 왔습니다.",
            "지금까지 하나님을 본 사람은 없습니다. 그러나 아버지 품 안에 계신 독생하신 하나님이 그분을 알려 주셨습니다.",
            "유대 지도자들이 예루살렘에서 제사장들과 레위인들을 요한에게 보내어 '당신은 누구입니까?'라고 물었을 때의 요한의 증언은 이러했습니다.",
            "요한은 숨기지 않고 분명히 말했습니다. '나는 그리스도가 아닙니다.'",
            "그들이 물었습니다. '그러면 당신은 누구입니까? 엘리야입니까?' 요한이 대답했습니다. '아닙니다.' '그러면 그 예언자입니까?' '아닙니다.'",
            "그래서 그들이 말했습니다. '당신은 누구입니까? 우리를 보낸 이들에게 대답할 수 있게 해 주십시오. 당신은 자신을 누구라고 말씀하십니까?'",
            "요한이 대답했습니다. '나는 예언자 이사야가 말한 대로 광야에서 외치는 소리입니다. 주님의 길을 곧게 만드십시오.'",
            "보냄을 받은 이들 중에는 바리새인들도 있었습니다.",
            "그들이 요한에게 물었습니다. '당신이 그리스도도 아니고 엘리야도 아니고 그 예언자도 아니라면, 왜 세례를 베푸는 것입니까?'",
            "요한이 대답했습니다. '나는 물로 세례를 베풀지만, 여러분 가운데는 여러분이 알지 못하는 한 분이 서 계십니다.",
            "그분은 내 뒤에 오시는 분인데, 나는 그분의 신발 끈을 풀어 드리기도 감당하지 못합니다.'",
            "이 일은 요단강 건너편 베다니에서 일어났는데, 그곳은 요한이 세례를 베풀던 곳이었습니다.",
            "다음 날 요한은 예수님이 자기에게 오시는 것을 보고 말했습니다. '보십시오! 세상의 죄를 지고 가는 하나님의 어린양입니다!",
            "이분이 바로 내가 전에 말했던 분입니다. 내 뒤에 오시는 분이 나보다 앞서신 것은 나보다 먼저 계셨기 때문이라고 말했는데, 바로 이분을 가리켜 한 말입니다.",
            "나도 이분을 알지 못했습니다. 그러나 내가 와서 물로 세례를 베푸는 것은 이분을 이스라엘에 나타내기 위해서입니다.'",
            "요한은 또 증언했습니다. '나는 성령이 비둘기처럼 하늘에서 내려와 이분 위에 머물는 것을 보았습니다.",
            "나는 이분을 알지 못했습니다. 그러나 나를 보내어 물로 세례를 베풀라고 하신 분이 내게 말씀하셨습니다. 성령이 내려와서 누구 위에 머무는 것을 보거든, 그분이 성령으로 세례를 베푸실 분이라고 하셨습니다.",
            "나는 그것을 보았고, 이분이 하나님의 아들이심을 증언하였노라 하니라",
            "다음 날 요한이 자기 제자 두 사람과 함께 서 있다가",
            "예수님이 지나가시는 것을 보고 말하되 보라! 하나님의 어린양이시다!",
            "두 제자는 요한이 하는 말을 듣고 예수님을 따라갔습니다.",
            "예수님이 돌아보시고 그들이 따라오는 것을 보시고 물어 이르시되 무엇을 찾고 있느냐? 이르되 랍비여 어디에 머무르십니까?'",
            "예수께서 이르시되 와서 보아라.' 그래서 그들은 가서 예수님이 계신 곳을 보고 그 날 예수님과 함께 머물렀습니다. 때는 오후 4시쯤이었습니다.",
            "요한의 말을 듣고 예수님을 따라간 두 사람 중 하나는 시몬 베드로의 형제 안드레였습니다.",
            "그는 먼저 자기 형제 시몬을 찾아가서 말했습니다. '우리가 메시야를 만났다!'(메시야는 그리스도라는 뜻입니다)",
            "그리고 시몬을 예수님께 데려왔습니다. 예수님은 시몬을 보시고 말씀하셨습니다. '너는 요한의 아들 시몬이구나. 앞으로는 게바라고 하겠다.'(게바는 베드로라는 뜻입니다)",
            "다음 날 예수께서 갈릴리로 나가려 하시다가 빌립을 만나셨습니다. 예수님이 빌립에게 말씀하셨습니다. '나를 따라오너라.'",
            "빌립은 안드레와 베드로와 같은 동네인 벳새다 출신이었습니다.",
            "빌립이 나다나엘을 찾아가서 말했습니다. '우리가 모세의 율법과 예언자들의 글에 기록된 분을 만났습니다. 나사렛 사람 요셉의 아들 예수님이십니다.'",
            "나다나엘이 말했습니다. '나사렛에서 무슨 선한 것이 날 수 있겠습니까?' 빌립이 대답했습니다. '와서 보십시오.'",
            "예수께서 나다나엘이 자기에게 오는 것을 보시고 그를 가리켜 이르시되 보라, 참으로 순수한 이스라엘 사람이다. 그의 마음에는 거짓이 없다.'",
            "나다나엘이 물었습니다. '어떻게 저를 아십니까?' 예수님이 대답하셨습니다. '빌립이 너를 부르기 전에, 네가 무화과나무 아래에 있을 때 내가 너를 보았다.'",
            "나다나엘이 대답했습니다. '랍비님, 당신은 하나님의 아들이시요 당신은 이스라엘의 임금이로소이다",
            "예수께서 대답하여 이르시되 내가 너를 무화과나무 아래에서 보았다 하므로 믿느냐 이보다 더 큰 일을 보게 될 것이다.'",
            "그리고 말씀하셨습니다. '내가 진실로 진실로 너희에게 말한다. 너희는 하늘이 열리고 하나님의 천사들이 인자 위에 오르락내리락하는 것을 보게 될 것이다.'"
        ]
    },
    KRV4: {
        john1: [
            "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라",
            "그가 태초에 하나님과 함께 계셨고",
            "만물이 그로 말미암아 지은 바 되었으니 지은 것이 하나도 그가 없이는 된 것이 없느니라",
            "그 안에 생명이 있었으니 이 생명은 사람들의 빛이라",
            "빛이 어둠에 비치되 어둠이 깨닫지 못하더라",
            "하나님께서 보내신 사람이 있으니 그의 이름은 요한이라",
            "그가 증거하러 왔으니 곧 빛에 대하여 증거하고 모든 사람이 자기로 말미암아 믿게 하려 함이라",
            "그는 이 빛이 아니요 이 빛에 대하여 증거하러 온 자라",
            "참 빛 곧 세상에 와서 각 사람에게 비추는 빛이 있었나니",
            "그가 세상에 계셨으며 세상은 그로 말미암아 지은 바 되었으되 세상이 그를 알지 못하였고",
            "자기 땅에 오매 자기 백성이 영접하지 아니하였으나",
            "영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니",
            "이는 혈통으로나 육정으로나 사람의 뜻으로 나지 아니하고 오직 하나님께로서 난 자들이니라",
            "말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라",
            "요한이 그에 대하여 증거하여 외쳐 이르되 내가 전에 말하기를 내 뒤에 오시는 이가 나보다 앞선 것은 나보다 먼저 계심이라 한 것이 이 사람을 가리킴이라 하니라",
            "우리가 다 그의 충만한 데서 받으니 은혜 위에 은혜러라",
            "율법은 모세로 말미암아 주어진 것이요 은혜와 진리는 예수 그리스도로 말미암아 온 것이라",
            "본래 하나님을 본 사람이 없으되 아버지 품 속에 있는 독생하신 하나님이 나타내셨느니라",
            "유대인들이 예루살렘에서 제사장들과 레위인들을 요한에게 보내어 네가 누구냐 물을 때에 요한의 증거가 이러하니라",
            "요한이 드러내어 말하고 숨기지 아니하니 드러내어 하는 말이 나는 그리스도가 아니라 한대",
            "또 묻되 그러면 누구냐 네가 엘리야냐 이르되 나는 아니라 또 묻되 네가 그 선지자냐 대답하되 아니라",
            "또 말하되 누구냐 우리를 보낸 이들에게 대답하게 하라 너는 네게 대하여 무엇이라 하느냐",
            "이르되 나는 선지자 이사야의 말과 같이 주의 길을 곧게 하라고 광야에서 외치는 자의 소리로라 하니라",
            "그들은 바리새인들이 보낸 자라",
            "또 물어 이르되 네가 만일 그리스도도 아니요 엘리야도 아니요 그 선지자도 아닐진대 어찌하여 세례를 베푸느냐",
            "요한이 대답하되 나는 물로 세례를 베풀거니와 너희 가운데 너희가 알지 못하는 한 사람이 섰으니",
            "곧 내 뒤에 오시는 그이라 나는 그의 신발끈을 풀기도 감당하지 못하겠노라 하더라",
            "이 일은 요한이 세례 베풀던 곳 요단 강 건너편 베다니에서 일어난 일이니라",
            "이튿날 요한이 예수께서 자기에게 나아오심을 보고 이르되 보라 세상 죄를 지고 가는 하나님의 어린 양이로다",
            "내가 전에 말하기를 내 뒤에 오는 사람이 있는데 나보다 앞선 것은 그가 나보다 먼저 계심이라 한 것이 이 사람을 가리킴이라",
            "나도 그를 알지 못하였으나 내가 와서 물로 세례를 베푸는 것은 그를 이스라엘에 나타내려 함이라 하니라",
            "요한이 또 증언하여 이르되 내가 보매 성령이 비둘기 같이 하늘에서 내려와서 그의 위에 머물렀더라",
            "나도 그를 알지 못하였으나 나를 보내어 물로 세례를 베풀라 하신 그이가 나에게 말씀하시되 성령이 내려와서 누구 위에든지 머무는 것을 보거든 그가 곧 성령으로 세례를 베푸실 분이라고 하셨기에",
            "내가 보고 그가 하나님의 아들이심을 증언하였노라 하니라",
            "또 이튿날 요한이 자기 제자 중 두 사람과 함께 섰다가",
            "예수께서 거니심을 보고 말하되 보라 하나님의 어린 양이로다",
            "두 제자가 그의 말을 듣고 예수를 따르거늘",
            "예수께서 돌이켜 그들이 따르는 것을 보시고 물어 이르시되 무엇을 구하느냐 이르되 랍비여 어디 계시오니이까 하니 (랍비는 번역하면 선생이라)",
            "예수께서 이르시되 와서 보라 그러므로 그들이 가서 계신 데를 보고 그 날 함께 거하니 때가 열 시쯤 되었더라",
            "요한의 말을 듣고 예수를 따르는 두 사람 중의 하나는 시몬 베드로의 형제 안드레라",
            "그가 먼저 자기의 형제 시몬을 찾아 말하되 우리가 메시야를 만났다 하고 (메시야는 번역하면 그리스도라)",
            "데리고 예수께로 오니 예수께서 보시고 이르시되 네가 요한의 아들 시몬이니 장차 게바라 하리라 하시니라 (게바는 번역하면 베드로라)",
            "이튿날 예수께서 갈릴리로 나가려 하시다가 빌립을 만나 이르시되 나를 따르라 하시니",
            "빌립은 안드레와 베드로와 한 동네 벳새다 사람이라",
            "빌립이 나다나엘을 찾아 이르되 모세가 율법에 기록하였고 여러 선지자가 기록한 그이를 우리가 만났으니 요셉의 아들 나사렛 예수라 하니",
            "나다나엘이 이르되 나사렛에서 무슨 선한 것이 날 수 있느냐 빌립이 이르되 와서 보라 하니라",
            "예수께서 나다나엘이 자기에게 오는 것을 보시고 그를 가리켜 이르시되 보라 이는 참으로 이스라엘 사람이라 그 속에 간사한 것이 없도다",
            "나다나엘이 이르되 어떻게 나를 아시나이까 예수께서 대답하여 이르시되 빌립이 너를 부르기 전에 네가 무화과나무 아래에 있을 때에 보았노라",
            "나다나엘이 대답하되 랍비여 당신은 하나님의 아들이시요 당신은 이스라엘의 임금이로소이다",
            "예수께서 대답하여 이르시되 내가 너를 무화과나무 아래에서 보았다 하므로 믿느냐 이보다 더 큰 일을 보게 될 것이다.'",
            "그리고 말씀하셨습니다. '내가 진실로 진실로 너희에게 말한다. 너희는 하늘이 열리고 하나님의 천사들이 인자 위에 오르락내리락하는 것을 보게 될 것이다.'"
        ]
    }
};

// 현재 설정 상태
let leftVersion = 'ESV';
let rightVersion = 'KRV';
let currentlyPlaying = null;
let voicePreference = 'male';
let speechRate = 0.8;

// Google Cloud TTS 설정
const GOOGLE_CLOUD_API_KEY = 'YOUR_API_KEY'; // 실제 API 키로 교체 필요

async function speakVerseWithGoogleTTS(text, verseElement) {
    try {
        if (currentlyPlaying) {
            currentlyPlaying.classList.remove('playing');
        }
        
        verseElement.classList.add('playing');
        currentlyPlaying = verseElement;

        const isEnglish = text.match(/[a-zA-Z]/);
        const languageCode = isEnglish ? 'en-US' : 'ko-KR';
        const voiceName = isEnglish 
            ? (voicePreference === 'male' ? 'en-US-Neural2-D' : 'en-US-Neural2-F')
            : (voicePreference === 'male' ? 'ko-KR-Neural2-B' : 'ko-KR-Neural2-C');

        const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GOOGLE_CLOUD_API_KEY}`
            },
            body: JSON.stringify({
                input: { text: text },
                voice: {
                    languageCode: languageCode,
                    name: voiceName
                },
                audioConfig: {
                    audioEncoding: 'MP3',
                    speakingRate: speechRate,
                    pitch: voicePreference === 'male' ? -2.0 : 0.0
                }
            })
        });

        const data = await response.json();
        const audioContent = data.audioContent;
        const audio = new Audio('data:audio/mp3;base64,' + audioContent);
        
        audio.onended = () => {
            verseElement.classList.remove('playing');
            currentlyPlaying = null;
        };

        audio.play();
    } catch (error) {
        console.error('Google TTS 오류:', error);
        verseElement.classList.remove('playing');
        currentlyPlaying = null;
    }
}

// 기존 speakVerse 함수를 새로운 함수로 교체
function speakVerse(text, verseElement) {
    speakVerseWithGoogleTTS(text, verseElement);
}

// 구절 표시 함수
function displayVerses() {
    const leftVersesContainer = document.getElementById('leftVerses');
    const rightVersesContainer = document.getElementById('rightVerses');
    const leftVersionTitle = document.getElementById('leftVersionTitle');
    const rightVersionTitle = document.getElementById('rightVersionTitle');
    
    // 컨테이너 초기화
    leftVersesContainer.innerHTML = '';
    rightVersesContainer.innerHTML = '';
    
    // 버전 제목 업데이트
    leftVersionTitle.textContent = leftVersion;
    rightVersionTitle.textContent = rightVersion;
    
    const leftVerses = bibleData[leftVersion].john1;
    const rightVerses = bibleData[rightVersion].john1;
    
    // 왼쪽 구절 표시
    leftVerses.forEach((verse, index) => {
        const verseElement = document.createElement('div');
        verseElement.className = 'verse';
        
        const verseNumber = document.createElement('div');
        verseNumber.className = 'verse-number';
        verseNumber.textContent = index + 1;
        
        const verseText = document.createElement('div');
        verseText.className = 'verse-text';
        verseText.textContent = verse;
        
        verseElement.appendChild(verseNumber);
        verseElement.appendChild(verseText);
        
        verseElement.addEventListener('click', () => {
            speakVerse(verse, verseElement);
        });
        
        leftVersesContainer.appendChild(verseElement);
    });
    
    // 오른쪽 구절 표시
    rightVerses.forEach((verse, index) => {
        const verseElement = document.createElement('div');
        verseElement.className = 'verse';
        
        const verseNumber = document.createElement('div');
        verseNumber.className = 'verse-number';
        verseNumber.textContent = index + 1;
        
        const verseText = document.createElement('div');
        verseText.className = 'verse-text';
        verseText.textContent = verse;
        
        verseElement.appendChild(verseNumber);
        verseElement.appendChild(verseText);
        
        verseElement.addEventListener('click', () => {
            speakVerse(verse, verseElement);
        });
        
        rightVersesContainer.appendChild(verseElement);
    });
}

// 웹 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    const leftVersionSelect = document.getElementById('leftVersion');
    const rightVersionSelect = document.getElementById('rightVersion');
    const voiceSelect = document.getElementById('voiceSelect');
    const speedSlider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    
    // 버전 선택 이벤트 처리
    leftVersionSelect.addEventListener('change', (e) => {
        leftVersion = e.target.value;
        displayVerses();
    });
    
    rightVersionSelect.addEventListener('change', (e) => {
        rightVersion = e.target.value;
        displayVerses();
    });
    
    // 음성 선택 이벤트 처리
    voiceSelect.addEventListener('change', (e) => {
        voicePreference = e.target.value;
    });
    
    // 속도 조절 이벤트 처리
    speedSlider.addEventListener('input', (e) => {
        speechRate = parseFloat(e.target.value);
        speedValue.textContent = speechRate.toFixed(1) + 'x';
    });
    
    // 초기 구절 표시
    displayVerses();
});

// 음성 목록이 로드될 때까지 기다림
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = function() {
        const voices = window.speechSynthesis.getVoices();
        console.log('사용 가능한 모든 음성:', voices.map(v => `${v.name} (${v.lang})`));
    };
} 