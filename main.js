// clear from before unload
window.onbeforeynload = () => {
    for(const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};