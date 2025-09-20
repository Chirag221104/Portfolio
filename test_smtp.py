import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

# Your SMTP Configuration (from your environment variables)
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "chiragmalde166@apsit.edu.in"
SMTP_PASS = "sglf dcga eazq wpdg"
SMTP_TLS = True

def test_smtp_connection():
    """Test basic SMTP connection"""
    try:
        print("Testing SMTP connection...")
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.ehlo()  # Identify yourself to the server
        server.starttls()  # Enable TLS encryption
        server.ehlo()  # Re-identify as an encrypted connection
        server.login(SMTP_USER, SMTP_PASS)
        print("✅ SMTP Connection successful!")
        server.quit()
        return True
    except Exception as e:
        print(f"❌ SMTP Connection failed: {e}")
        return False

def send_test_email():
    """Send a test email"""
    try:
        # Email content
        sender = SMTP_USER
        recipient = SMTP_USER  # Send to yourself for testing
        subject = "Test Email from Python - Gmail SMTP"
        body = """
        Hello!
        
        This is a test email sent using Python and Gmail SMTP.
        
        Your Gmail SMTP configuration is working correctly!
        
        Best regards,
        Your Python Script
        """
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = sender
        msg['To'] = recipient
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        print("Sending test email...")
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
            
        print("✅ Test email sent successfully!")
        print(f"Check your inbox at: {recipient}")
        return True
        
    except Exception as e:
        print(f"❌ Email sending failed: {e}")
        return False

# Run tests
if __name__ == "__main__":
    print("=== Gmail SMTP Test ===")
    print(f"Email: {SMTP_USER}")
    print(f"SMTP Server: {SMTP_HOST}:{SMTP_PORT}")
    print("-" * 30)
    
    # Test connection first
    if test_smtp_connection():
        print("-" * 30)
        # If connection works, try sending email
        send_test_email()
    
    print("-" * 30)
    print("Test complete!")
