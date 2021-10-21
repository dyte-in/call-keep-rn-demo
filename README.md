<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://dyte.in">
    <img src="https://dyte-uploads.s3.ap-south-1.amazonaws.com/dyte-logo-dark.svg" alt="Logo" width="80">
  </a>

  <h2 align="center">Callscreen demo using Dyte SDK</h2>

  <p align="center">
    A POC to show callscreen with Dyte meetings in react-native
    <br />
    <a href="https://docs.dyte.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.dyte.io">View Demo</a>
    ·
    <a href="https://github.com/dyte-in/call-keep-rn-demo/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-in/call-keep-rn-demo/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Supported Platforms](#supported-platforms)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Version History](#version-history)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [About](#about)

<!-- ABOUT THE PROJECT -->

## About The Project

On mobile, you can use a calling screens to alert users about incoming audio / video calls or meetings. To do this, you would need to use either the native APIs or a library such as [React Native Callkeep](https://github.com/react-native-webrtc/react-native-callkeep) which handle this for you.

The purpose of this repository is to show a sample implementation of how to do this using [React Native Callkeep](https://github.com/react-native-webrtc/react-native-callkeep).

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Built With

- [React Native](https://reactnative.dev)
- [React Native Callkeep](https://github.com/react-native-webrtc/react-native-callkeep)
- [Firebase](https://firebase.google.com)
- :heart:

### Supported Platforms

- [x] Android
- [ ] iOS

_Note: we will add the iOS code soon, meanwhile you can also follow along the documentation of [React Native Callkeep](https://github.com/react-native-webrtc/react-native-callkeep) to achieve the same results._

#### Cases tested manually

- Receive call when app is background
- Receive call when user closes app (not forced close)

#### Device brands tested on

- Samsung
- Oneplus
- Huawei
- Oppo

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/dyte-in/call-keep-rn-demo.git
```

2. Install NPM packages

```sh
npm install
```

3. Enter your firebase credentials at `/android/app/google-services.json`.

4. <run on device>

5. Go to cloud-messaging and add `roomName, organisedBy, callerName` in Additional Options and `Custom data`.

   **Note:** Below are the defaults values set if you don't give roomName, organisedBy and callName

   ```js
   const organiser = organisedBy || 'Dyte';
   const caller = callerName || 'Rohit';
   const dyteRoomName = roomName || 'hlyavk-teuwkc';
   ```

   Look at `./src/util/bgMessaging` for reference.

6. Review and send information

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)._

<!-- CHANGELOG -->

## Version History

See [CHANGELOG](./CHANGELOG.md).

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/dyte-in/call-keep-rn-demo/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Sincere thanks to all [our contributors](Thank you, [contributors](https://github.com/dyte-in/call-keep-rn-demo/graphs/contributors)!)!

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) and code of conduct at [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) while contributing to the project :smile:.

## Support

Contributions, issues, and feature requests are welcome!
Give a ⭐️ if you like this project!

<!-- LICENSE -->

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE) for more information.

## About

`call-keep-rn-demo` is created & maintained by Dyte, Inc. You can find us on Twitter - [@dyte_io](twitter.com/dyte_io) or write to us at `dev [at] dyte.io`.

The names and logos for Dyte are trademarks of Dyte, Inc.

We love open source software! See [our other projects](https://github.com/dyte-in) and [our products](https://dyte.io).
