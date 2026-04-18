
function sendMessage() {
  const input = document.getElementById("input");
  const text = input.value.trim();

  if (!text) return;

  const chatBox = document.getElementById("chatBox");

  // USER MESSAGE
  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerHTML = `
    <div class="bubble">${text}</div>
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png">
  `;
  chatBox.appendChild(userDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // AI RESPONSE
  setTimeout(() => {
    const aiDiv = document.createElement("div");
    aiDiv.className = "message ai";
    aiDiv.innerHTML = `
      <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png">
      <div class="bubble">This is AI reply for: "${text}"</div>
    `;
    chatBox.appendChild(aiDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}