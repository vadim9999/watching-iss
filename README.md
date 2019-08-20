# Watching iss

Used this frameworks and libraries to create app:
- ReactJS
- google-map-react
- moment
- redux
- redux-saga
- antd 
- axios

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