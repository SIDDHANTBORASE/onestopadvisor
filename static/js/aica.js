 function appendMessage(message, className) {
            const chatBox = document.getElementById('chat-box');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + className;
            messageDiv.innerText = message;
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight; 
        }

        function sendMessage() {
            const input = document.getElementById('user-input');
            const message = input.value.trim();
            if (message === '') return;

            appendMessage(message, 'user-message');
            input.value = '';

            setTimeout(() => {
                const aiResponse = "AI: Wait we are out of Service Right Now  '" ;
                appendMessage(aiResponse, 'ai-message');
            }, 500);
        }