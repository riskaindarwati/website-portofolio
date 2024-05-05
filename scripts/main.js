// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByName("form")){
        form.reset();
    }
}