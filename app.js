const tg = window.Telegram.WebApp;

// Expand the Mini App
tg.expand();
tg.ready();

// Get user data
const user = tg.initDataUnsafe?.user;

const userInfo = document.getElementById('user-info');
if (user) {
  userInfo.innerText = `Welcome, ${user.first_name} (ID: ${user.id})`;
} else {
  userInfo.innerText = "Welcome, Player!";
}

// Theme adaptation
document.body.style.backgroundColor = tg.themeParams.bg_color || "#1a1a2e";
document.body.style.color = tg.themeParams.text_color || "#ffffff";

// Test button
document.getElementById('test-btn').addEventListener('click', () => {
  tg.showAlert("Merge Haven is connected successfully!");
  tg.HapticFeedback.impactOccurred("medium");
});
