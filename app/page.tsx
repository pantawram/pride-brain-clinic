export default function Home() {
  return <main><h1>Pride Brain Clinic</h1></main>
}export default function Home() {
  return (
    <main>
      <header style={{ background: '#1a3a6b', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Pride Brain Clinic</h1>
        <p>คลินิกเฉพาะทางด้านสมองและระบบประสาท</p>
      </header>
      <section style={{ padding: '60px 20px', textAlign: 'center', background: '#f0f4ff' }}>
        <h2>ดูแลสุขภาพสมองของคุณ</h2>
        <p>ทีมแพทย์ผู้เชี่ยวชาญพร้อมดูแลคุณด้วยเทคโนโลยีทันสมัย</p>
        <a href="#contact">นัดหมายแพทย์</a>
      </section>
      <section style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1a3a6b' }}>บริการของเรา</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '32px' }}>
          <div style={{ border: '1px solid #dde', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <h3>ตรวจสมองและระบบประสาท</h3>
            <p>วินิจฉัยโรคสมองด้วยเครื่องมือทันสมัย MRI, EEG</p>
          </div>
          <div style={{ border: '1px solid #dde', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <h3>รักษาโรคระบบประสาท</h3>
            <p>รักษาปวดหัว ไมเกรน โรคลมชัก พาร์กินสัน</p>
          </div>
          <div style={{ border: '1px solid #dde', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <h3>ฟื้นฟูสมรรถภาพ</h3>
            <p>กายภาพบำบัดและฟื้นฟูระบบประสาทโดยผู้เชี่ยวชาญ</p>
          </div>
          <div style={{ border: '1px solid #dde', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <h3>ปรึกษาแพทย์ออนไลน์</h3>
            <p>พบแพทย์ผ่านระบบ Telemedicine สะดวก รวดเร็ว</p>
          </div>
        </div>
      </section>
      <section id="contact" style={{ background: '#1a3a6b', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h2>ติดต่อนัดหมาย</h2>
        <p>โทร: 02-XXX-XXXX | LINE: @pridebrainclinic | จ-ศ 08:00-17:00</p>
      </section>
      <footer style={{ background: '#111', color: '#aaa', padding: '20px', textAlign: 'center' }}>
        <p>2026 Pride Brain Clinic. All rights reserved.</p>
      </footer>
    </main>
  )
}
