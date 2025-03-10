document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "1234") {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "dashboard.html"; // توجيه المستخدم إلى الصفحة الرئيسية
    } else {
        errorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة!";
    }
});
