var admin = require("firebase-admin");

var serviceAccount = {
    "type": "service_account", 
    "project_id": process.env.PROJECT_ID,
    "private_key_id": "b6373572e8a4155a4fd2b725031dd98de018794d",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVZCgd1a7zLYS2\nycPVPyFChGghQw/40UAf17tsUM8d5bYL3uorUfuyoPPv4xavttEoELzHWpcC+YCW\nQ0k+K2b5759t0dy0c6vX7x0bBJzQUQ5pT2mvyTqEQWoZjrHLpXmBbD4f05QFNhS0\nBXd/PvXQkI5LdCDpYMfff3WHitnwzKY+npDcLGRCo7zbC3RVHzBH1lOxPVN9Vexb\nRGxwnD/KEafZOZWgnCMq5vlYPhMAEdm1UoAFNXWhroy2B/W0RW9l8yw6xYVPtcVS\nMgWrV0V+xdIJRZSdOoAaFQlMAEO4VvUD5r9s0XTKXRgh2L4EgaBjy/V50sZOoRcE\nkW21S2zVAgMBAAECggEAT8AP0h6jNNUFLX84hkECwCZV+GBk3rvteDkbHb8RuP25\nzLPx1mDcbYUDxdqcBu2PO6cNtn+fwofWy9G31NlJsg0hC10MXBCC37/Io+lUZfJ1\nLVx1hjHxga4k5gpTXmWohHscuK5NOqlckW8dmtu/6MOtuntbNX1rFZdAKHj3PKu/\n5lYFAVcmhGBlZvDg7Qe4cK2ki8yaMxfp7PCos7aibS9gcx7/9qhxoiZm/JzXDK6B\nkaCdn2GfkwSNc0uIfBx9UMvjoSN5koeh95g0N1PMZlQgy1mlpzRhZ+gdraVzwD9I\nw4GvyX73gDQWQAdXReC3puC9FKGWT5t3s8q7XIGaXQKBgQD/4cRMnX6EaXfc/FyJ\nuh0mAP3LjxBpv6GT447BxRSUZWTyiDVJME3RtjVTJPp+kk3ka/NsG9J3CPTjKR76\nyGm8gkBPJAEJ2ZEzNnk9icUpFhKNUQ9lhU85uUrAcBBRIzF2q2YBb/shMaVELLqn\nnra6pbeKTuQFlfrCn3WQ9NTRUwKBgQDVfV6YaSeEEGky0CmdCtuv3PIVoKngc9F+\n9ApExRo3DeeL09GFpVhsFMv57khm1POwjZbmLIRg6Vmyqof3ofaLoP36Oo3PoZGR\nsBXugVTdhKdcw7mguo/NqlMi88w6pD/KYs3Hz4J1wyLvWdOVLXzo5zmeG1IkI2s7\nI+pW3BE8NwKBgQC7AyxOuoSvDc42ypJvboDDN9JFpeffAdl7lsLNR9bEpl5jC722\nIgGeFcdfXxVc0FzxZxxflO37ZaZlJ7amnzb4OVH7BVtk8Yg3n8Z4fWqFnsYsVmQk\nVIwUqiHCB6VFR61tB9PjlQ47smcRLoe03kC6pUdBZGsu0fCVsalhKi8oVQKBgQCK\n0ShPRiDRuLIOvlgwqzzKD4rCEWQkdGrGd/ytVtSC8+GZhDP7CNaEAMnZS918L//8\nzzRNmqjBMzqF+GjM1l2v0REUQjqvxckXyD2ahjIekAEbSpFLN8QF4TiJw6kKgH6S\nJMjVodKcrDPtGqV/nMJZ1vAaJH22zekN3X6k2BfE5QKBgHywCjVeKoWaipwC/wk9\nX/3D1MK556Oqx07m9kJVtX2XAvFIz3Y5wd4WioT+1pIP6DiITtAlI6lNp/cs3k+I\nA4x0yHI27JF0Q8uu7/9ZVZlXCaal5NA9JjEhW/rIQLIZF/Pj5NTTTExNBpC6n4vc\njFpXv818mSturbseAI7aBhn9\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-pcawi@jain-project-39725.iam.gserviceaccount.com",
    "client_id": "118236614911499753603",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pcawi%40jain-project-39725.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
console.log(admin.database)