import fs from 'fs';
import path from 'path';
import { Registration } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'registrations.json');

// Đảm bảo thư mục và file JSON tồn tại
function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf-8');
  }
}

// Đọc toàn bộ danh sách đăng ký
export function getRegistrations(): Registration[] {
  ensureDataFile();
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data) as Registration[];
  } catch (error) {
    console.error('Error reading registrations file:', error);
    return [];
  }
}

// Lưu thông tin đăng ký mới
export function saveRegistration(
  input: Omit<Registration, 'id' | 'registeredAt' | 'qrCodeData'>
): Registration {
  ensureDataFile();

  const registrations = getRegistrations();

  // Kiểm tra trùng lặp email hoặc SĐT trước khi lưu
  const isDuplicate = registrations.some(
    (r) => r.email.toLowerCase() === input.email.toLowerCase() || r.phone === input.phone
  );

  if (isDuplicate) {
    throw new Error('DUPLICATE_ENTRY');
  }

  // Khởi tạo các giá trị tự động
  const timestamp = Math.floor(Date.now() / 1000);
  const randomStr = Math.random().toString(36).substring(2, 6);
  const newId = `reg_${timestamp}_${randomStr}`;

  const newRecord: Registration = {
    ...input,
    id: newId,
    registeredAt: new Date().toISOString(),
    qrCodeData: `3M-EVENT:${newId}`,
  };

  registrations.push(newRecord);

  // Ghi đồng bộ để đảm bảo dữ liệu ghi thành công lập tức
  fs.writeFileSync(FILE_PATH, JSON.stringify(registrations, null, 2), 'utf-8');

  return newRecord;
}
