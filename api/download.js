const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'TransportMan.apk');
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    res.setHeader('Content-Disposition', 'attachment; filename="TransportMan.apk"');
    res.setHeader('Content-Length', fileBuffer.length);
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    
    res.send(fileBuffer);
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
}
