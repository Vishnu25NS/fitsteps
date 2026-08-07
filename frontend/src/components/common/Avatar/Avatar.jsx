import React from 'react';
import './Avatar.css';

const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBezgp-oWn4jM6fOTlk6AZx7sEx8V8cXIlA5n8TLRI_KZzAfbYgL6qwkwzvsThD4HGk8Qv0TTmvF38gLzt3ukvkHZ_P0oVv3KrvBkUUOPaNA0xGyWs5Fh9aYo74lupKC2nY0Cau3341KmnvhrJ_ncceaj-Zx2EJabidUDPnQjFM-kAVOzK71O6cl3Utf3gtP_L9zklfVanfpB-J2XHE3JHfWMkWXuJTDWrl4wwnLa5dJT3aw_nFSMyN5g";

function Avatar({
  src = DEFAULT_AVATAR,
  alt = "User avatar",
  size = 40,
  border = "2px solid var(--color-surface)",
  className = "",
}) {
  return (
    <div
      className={`common-avatar ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: border || 'none',
      }}
    >
      <img className="common-avatar-img" src={src} alt={alt} />
    </div>
  );
}

export default Avatar;
