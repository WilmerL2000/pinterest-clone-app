<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">Pinterest Clone</h1>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692394107/GitHub/pinterest-clone/home_sgdm7v.png" width="100%" >
    <a href="https://pinterest-clone-app-w.vercel.app/" target="_blank">Web Page</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>
    <strong>
        Table of Contents
    </strong>
  </summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#desktop">Desktop</a></li>
        <li><a href="#mobile">Mobile</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is developed with Next.js 13 and the new App Router: React, Tailwind and Firebase. It has many of the features of the main application as detailed below.

### Features

- Google authentication.
- Github authentication.
- Create new pins.
- Visit user profile.
- See information of each pin.
- Storage of images using firebase.

### Tech Stack

<table>
    <tr>
      <td align="center" width="96">          
        <br><strong>Tech</strong>
      </td>           
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/image_20211214122557_0_h9qr5m.png" width="full" height="48" alt="Next.js" />
        <br><strong>Next.js</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487163/GitHub/assets/react_original_logo_icon_146374_whazfv.png" width="48" height="48" alt="React" />
        <br><strong>React</strong>        
      </td>      
       <td align="center" width="96">
        <img src="https://res.cloudinary.com/wils09/image/upload/v1686199220/GitHub/assets/logo-sm_omxcdj.png" width="48" height="48" alt="NextAuth" />
        <br><strong>NextAuth</strong>       
      </td> 
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682740139/GitHub/assets/firebase_yhvith.png" width="48" height="48" alt="Firebase" />
        <br><strong>Firebase</strong>        
      </td>     
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/file_type_typescript_official_icon_130107_svjybp.png" width="48" height="48" alt="TypeScript" />
        <br><strong>TypeScript</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/file_type_tailwind_icon_130128_mwu7ie.png" width="48" height="48" alt="Tailwind CSS" />
        <br><strong>Tailwind CSS</strong>        
      </td>     
    </tr>
     <tr>
      <td align="center" width="96">          
        <br><strong>Version</strong>
      </td>      
      <td align="center" width="96">
        <br>13.4.9
      </td>     
      <td align="center" width="96">
        <br>18.2.0
      </td>     
      <td align="center" width="96">
        <br>4.22.1
      </td>     
      <td align="center" width="96">
        <br>10.0.0
      </td>     
      <td align="center" width="96">
        <br>5.1.6
      </td>         
      <td align="center" width="96">
        <br>3.3.2
      </td>         
    </tr>
  </table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Desktop

<div align="center">
  <div>
    <h3>User Page</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692394107/GitHub/pinterest-clone/user_posts_g3qen0.png" width="100%" >
  </div>
  <div>
    <h3>Pin Details</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692394105/GitHub/pinterest-clone/post_uv7luw.png" width="100%" >
  </div>
  <div>
    <h3>Create New Pin</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692394105/GitHub/pinterest-clone/create_xuwq7x.png" width="100%" >
  </div>
</div>

### Mobile

<div align="center">
  <div>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692394106/GitHub/pinterest-clone/mobile1_urqlfi.png" width="100%" >
  </div>
  <br/>
  <div>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692394107/GitHub/pinterest-clone/mobile2_r8jqet.png" width="100%" >
  </div>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

_Follow the instructions below_

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/WilmerL2000/pinterest-clone-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Go to firebase and start a project
   ```sh
   https://firebase.google.com/
   ```
4. Starts the Authentication & Firestore Database sections
5. Go to Google Console and create a project and add OAUTH client
   ```sh
   https://console.cloud.google.com/
   ```
6. Setup `.env` file

   ```js
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    GITHUB_ID=
    GITHUB_SECRET=
    NEXTAUTH_SECRET=

    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=
   ```

7. Start project
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

`Wilmer Lopez Cespedes`

- Correo: wilmerlopezcespedes@gmail.com
- <a href="https://www.linkedin.com/in/wilmer-lopez-cespedes/" target="_blank">LinkedIn</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
