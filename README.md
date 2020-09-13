# Custom-API

![Dependencies](https://img.shields.io/david/wrkdev/custom-api?style=flat-square) [![GitHub license](https://img.shields.io/github/license/wrkdev/custom-api?style=flat-square)](https://github.com/wrkdev/custom-api) ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/wrkdev/custom-api?include_prereleases&style=flat-square)

Custom-API is an application that allows users to make api calls to multiple endpoints.

This application is for use with a frontend application. It has the following functions:
* Allow registration of a user
* Allow login of a user
* Allow a user to perform CRUD operations on posts and tasks.

This enables a user to add posts to a website using this application as well as register and login to that website.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of `nodejs`.
* You have created a `Mongodb Atlas` account.
    * Follow the instructions [here](https://docs.atlas.mongodb.com/getting-started/) to get started with Mongodb Atlas.

## Installing Custom-API

To install Custom-API, follow these steps:

```
git clone https://github.com/wrkdev/custom-api.git
npm install
```

You will also need to create a .env file to put your environment variables in:

```
PORT={PORT_NUMBER}
DB_CONNECTION={DB_CONNECTION_ADDRESS}
TOKEN_SECRET={TOKEN_SECRET}
```

## Using Custom-API

To use Custom-API, follow these steps:

Run in Development mode:
```
npm run dev / yarn dev
```

Run in Production mode:
```
npm run start / yarn start
```

## Contributing to Custom-API

To contribute to Custom-API, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin custom-api/feature`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@wrkdev](https://github.com/wrkdev) 📖

## Contact

If you want to contact me you can reach me at wrkdev12@gmail.com.

## License

This project uses the following license: [MIT License](https://github.com/wrkdev/custom-api/LICENSE).
