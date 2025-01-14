import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Tạo các biến __dirname và __filename trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  try {
    // Tạo stream cho sitemap với hostname của bạn
    const sitemap = new SitemapStream({ hostname: 'https://blog.newnol.io.vn' });

    // Tạo write stream để ghi sitemap vào thư mục public
    const writeStream = createWriteStream(path.resolve(__dirname, '../../public/sitemap.xml'));

    // Pipe sitemap stream vào write stream
    sitemap.pipe(writeStream);

    // Thêm các URL tĩnh
    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    sitemap.write({ url: '/blog', changefreq: 'weekly', priority: 0.8 });
    // Thêm các URL khác vào đây nếu cần

    // Đọc metadata.json để lấy danh sách bài viết
    const metadataPath = path.resolve(__dirname, '../../public/data/posts/metadata.json');
    let metadata;

    try {
      const metadataContent = readFileSync(metadataPath, 'utf-8');
      metadata = JSON.parse(metadataContent);
    } catch (error) {
      console.error('Error reading metadata.json:', error);
      return;
    }

    // Thêm URL cho từng bài viết
    metadata.posts.forEach(post => {
      sitemap.write({ url: `/blog/${post.slug}`, changefreq: 'monthly', priority: 0.7 });
    });

    // Kết thúc sitemap
    sitemap.end();

    // Đợi quá trình ghi hoàn tất
    await streamToPromise(sitemap);
    console.log('Sitemap đã được tạo thành công tại public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Gọi hàm để tạo sitemap
generateSitemap();