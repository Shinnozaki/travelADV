import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
    },
    mapContainer: {
        height: '85vh', width: '100%', backgroundColor: 'green'
    },
    markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
}))