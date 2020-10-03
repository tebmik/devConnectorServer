# DevMatrix

DevMatrix is a Social network, designed for developers and anyone who wishes to share there skills, training, work-experience with a like minded community.

# Quick start installation

## Add a default.json file in config folder with the following:

```
{
    "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
    "jwtSecret": "secret",
    "githubToken": "<yoursecrectaccesstoken>"
}

```

## Install server dependencies

```
npm install

```

## Install client dependencies

```
cd client
npm install

```

## Run both Express & React from root

```
npm run dev

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

This is the start of the project so i'm not worrying about the design. i'm making sure it works first.

I'll power though the front-end soon.

## License

[MIT](https://choosealicense.com/licenses/mit/)
