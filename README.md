# Custom-API

![Dependencies](https://img.shields.io/david/wrkdev/custom-api?style=flat-square) [![GitHub license](https://img.shields.io/github/license/wrkdev/custom-api?style=flat-square)](https://github.com/wrkdev/custom-api) ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/wrkdev/custom-api?include_prereleases&style=flat-square)

Custom-API is a Swagger API Application which allows users to make calls to tasks and posts endpoints.

This application is for use with a frontend application or as a standalone data source. It allows a user to execute CRUD operations on tasks and posts.
It also in future allow a user to make calls to external publicly available apis such as covid19api.com and more.

## Resources

Navigate to the resources folder to get information about how you can use the api:

### Tasks.md

* Explanation of each endpoint with examples of creation and updating of tasks.

### Posts.md

* Explanation of each endpoint with examples of creation and updating of posts.

### External.md

* List of public open source apis integrated.
* Explanation of endpoints with examples.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of `nodejs`.
* You have created a `Mongodb Atlas` account.
    * Follow the instructions [here](https://docs.atlas.mongodb.com/getting-started/) to get started with Mongodb Atlas.
    * Create the following collections: tasks, posts.
* You will need to create your own SSL Certificate.
* Navigate to the config/certs folder and run this command:
    `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 3650`
* You will then need to add the passphrase created to the .env.

## Installing Custom-API

To install Custom-API, follow these steps:

```
git clone https://github.com/wrkdev/custom-api.git
npm install
```

You will also need to create a .env file to put your environment variables in:

```
APPLICATION_HOSTNAME={APPLICATION_HOSTNAME}
DB_CONNECTION={DB_CONNECTION_ADDRESS}
TOKEN_SECRET={TOKEN_SECRET}
CERT_PASSPHRASE={PASSPHRASE}
```

You will also need to change the `host` in the swagger docs to the `APPLICATION_HOSTNAME`.

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

Then navigation to `https://localhost/api-docs`

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
