import React, { useState, useEffect } from 'react';
function Toasts({title = '', message = '', type = 'info', duration = 1000}) {
    const main = document.getElementById('toast');
    
    const closeToast = () => {
        main.removeChild(toast);
        clearTimeout(autoRemove);
    };

    const autoRemove = setTimeout(function(){
        main.removeChild(toast);
    }, duration+2000);

    const icons = {
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-circle',
        error: 'fas fa-exclamation-circle'
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.style.animation = `slideInLeft ease 1s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="fas ${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times" onClick="closeToast()"></i>
        </div>
    `;
    main.appendChild(toast);
}
function Toast(){
    return(
        <div id="toast"></div>
    )
}
export default Toast;