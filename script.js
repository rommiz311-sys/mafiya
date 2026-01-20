// 1. פונקציית התחברות (לדף login.html)
function performLogin(event) {
    event.preventDefault(); 
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    if ((user === "admin" && pass === "12345") || (user === "user" && pass === "abcd")) {
        window.location.href = "index.html";
    } else {
        errorMsg.style.display = "block";
    }
}

// 2. פונקציית שליחת הזמנה (לדף contact.html)
function handleOrder(event) {
    event.preventDefault(); // מונע מהדף להתרענן

    // שליפת הנתונים מהשדות
    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const msg = document.getElementById("message").value;

    // בדיקת תקינות בסיסית
    if (name === "" || phone.length < 9) {
        alert("נא למלא שם מלא ומספר טלפון תקין (לפחות 9 ספרות)");
        return false;
    }

    // שמירה ב"מערכת" (LocalStorage) - זה ה"קסם" שמעביר נתונים בין דפים
    localStorage.setItem("userName", name);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userMsg", msg);

    // --- השורה שתוקנה כאן למטה ---
    // מעבר לדף הקיים אצלך בתיקייה שראינו בצילום מסך
    window.location.href = "order-summary.html"; 
    
    return false;
}

// 3. פונקציית יציאה
function logout() {
    alert("מתנתק מהמערכת...");
    window.location.href = "login.html";
}