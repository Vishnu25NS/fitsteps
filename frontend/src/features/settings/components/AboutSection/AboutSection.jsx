import React from 'react';
import {
  MdInfoOutline,
  MdSecurity,
  MdDescription,
  MdMailOutline,
  MdChevronRight,
} from 'react-icons/md';
import Card from '../../../../components/common/Card';
import './AboutSection.css';

function AboutSection({ about = {} }) {
  const {
    appVersion = '1.0.0',
    privacyPolicyUrl = '#',
    termsUrl = '#',
    contactEmail = 'support@fitsteps.app',
  } = about;

  const handleLinkClick = (e, label) => {
    e.preventDefault();
    console.log(`Navigating to ${label}`);
  };

  return (
    <Card className="about-section-card">
      <h3 className="about-section-title">About</h3>

      {/* Version */}
      <div className="about-link-row">
        <div className="about-link-left">
          <MdInfoOutline className="about-link-icon" />
          <span>App Version</span>
        </div>
        <span className="about-version-text">{appVersion}</span>
      </div>

      {/* Privacy Policy */}
      <a
        href={privacyPolicyUrl}
        className="about-link-row"
        onClick={(e) => handleLinkClick(e, 'Privacy Policy')}
      >
        <div className="about-link-left">
          <MdSecurity className="about-link-icon" />
          <span>Privacy Policy</span>
        </div>
        <MdChevronRight className="about-chevron" />
      </a>

      {/* Terms of Service */}
      <a
        href={termsUrl}
        className="about-link-row"
        onClick={(e) => handleLinkClick(e, 'Terms of Service')}
      >
        <div className="about-link-left">
          <MdDescription className="about-link-icon" />
          <span>Terms of Service</span>
        </div>
        <MdChevronRight className="about-chevron" />
      </a>

      {/* Contact Support */}
      <a
        href={`mailto:${contactEmail}`}
        className="about-link-row"
        onClick={(e) => handleLinkClick(e, `Contact Support (${contactEmail})`)}
      >
        <div className="about-link-left">
          <MdMailOutline className="about-link-icon" />
          <span>Contact Support</span>
        </div>
        <MdChevronRight className="about-chevron" />
      </a>
    </Card>
  );
}

export default AboutSection;
