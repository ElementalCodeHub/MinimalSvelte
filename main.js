import App from './output/svelte/src/app.svelte';

const app = new App({
	target: document.body,
    props:{
        message:"Hello there!"
    }
});

export default app;