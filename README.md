# Watching iss

Stack:
- ReactJS 18
- TypeScript 5
- google-map-react
- moment
- redux toolkit
- redux-saga
- antd 
- axios
- Wepback 5


## Screenshots

<img src="https://github.com/vadim9999/watching-iss/blob/master/screenshots/screenshot1.png">

## How to run this project?


```
npm install 
npm start
```

Open in a browser (Google Chrome) url :
```
http://localhost:3000
```

This app doesn't has a key of Google API. You can create and set key to the component GoogleMapReact in `src/components/Map/Map` like this:

```

<GoogleMapReact
    bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        center={coordinates}
        defaultZoom={4}
    >
        <LocationISS />
</GoogleMapReact>

```
