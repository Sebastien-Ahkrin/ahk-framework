
Skip to content

    Pull requests
    Issues
    Marketplace
    Explore

    @Sebastien-Ahkrin

0
4

    1

Sebastien-Ahkrin/ahk-framework
Code
Issues 0
Pull requests 0
Projects 0
Wiki
Insights
Settings
ahk-framework/
or cancel

1

# AhkFramework

2

​

3

> A framework to create discord robots easily, with commands and events.

4

​

5

## Install

6

​

7

```bash

8

npm install ahkframework

9

```

10

​

11

## Usage

12

​

13

```javascript

14

// Require the AhkFramework package

15

const Bot = require('ahkframework');

16

​

17

// Creating the config, with all the stuff we'll need

18

const config = {

19

    token: "your token",

20

    name: "your bot name",

21

    prefix: "?",

22

    version: "X.X.X",

23

    icon_path: "your path, can be a internet link",

24

    presence: { name: config.prefix + "help" }

25

};

26

​

27

const x = {

28

    name: 'name',

29

    description: 'your description',

30

    examples: ['examples for the command'],

31

    aliases: ['a first aliases', 'a second aliases'],

32

    permissions: {

33

        user: ['MANAGE_MESSAGES'],

34

        client: ['MANAGE_MESSAGES']

35

    }

36

};

37

​

38

const client = new Bot(config)

39

​

40

client.registerEvent('typingStart', (channel, user) => {

41

    console.log('A user start typing')

42

});

43

​

44

client.registerCommand(x, (message, channel, client, args) => {

45

    //Action when a user use your commands

46

    console.log("a user use 'x' commands")

47

});

48

​

49

//Use this to create the default command : help with your prefix

50

client.createDefaultCommand();

@Sebastien-Ahkrin
Commit changes

    Commit directly to the dev branch.
    Create a new branch for this commit and start a pull request. Learn more about pull requests.

    © 2018 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    API
    Training
    Shop
    Blog
    About

Press h to open a hovercard with more details.
