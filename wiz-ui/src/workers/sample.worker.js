export default () => {
    onmessage = (e) => {
        if (!e) return;
        
        const envelope = e.data;
        const response = `New Message from ${envelope.from}: ${envelope.message}`;

        postMessage(response);
    };
}