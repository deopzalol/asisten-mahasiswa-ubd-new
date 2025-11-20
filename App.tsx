import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, GraduationCap, Clock, MapPin, BookOpen, Calendar, Phone, Moon, Sun, Menu, X, Users } from 'lucide-react';

export default function ChatbotAkademik() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Halo! Saya Asisten Akademik virtual. Saya siap membantu Anda dengan informasi seputar kampus. Apa yang ingin Anda ketahui?',
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesEndRef = useRef(null);

  const teamMembers = [
    'Ahmad Fadhil Rizki',
    'Siti Aisyah Putri',
    'Budi Santoso',
    'Dewi Lestari',
    'Reza Pratama'
  ];

  const quickQuestions = [
    { icon: Clock, text: 'Jam operasional kampus', key: 'jam' },
    { icon: MapPin, text: 'Lokasi fakultas', key: 'lokasi' },
    { icon: BookOpen, text: 'Pendaftaran mata kuliah', key: 'matkul' },
    { icon: Calendar, text: 'Kalender akademik', key: 'kalender' },
    { icon: Phone, text: 'Kontak layanan', key: 'kontak' },
    { icon: GraduationCap, text: 'Beasiswa', key: 'beasiswa' }
  ];

  const availableTopics = [
    '📚 Jam operasional kampus',
    '🏛️ Lokasi fakultas dan gedung',
    '📝 Pendaftaran mata kuliah (KRS)',
    '📅 Kalender akademik',
    '📞 Kontak layanan kampus',
    '🎓 Informasi beasiswa',
    '📖 Layanan perpustakaan',
    '💰 Pembayaran UKT',
    '🎓 Informasi wisuda dan kelulusan'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Logika Respon Chatbot
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('menu') || input.includes('bantuan') || input.includes('help') || input.includes('bisa')) {
      return `Berikut topik yang bisa saya bantu:\n\n${availableTopics.join('\n')}\n\nSilakan ketik pertanyaan Anda atau klik menu cepat di atas! 😊`;
    }
    
    if (input.includes('jam') || input.includes('operasional') || input.includes('buka')) {
      return 'Jam operasional kampus:\n\n📅 Senin - Jumat: 07.00 - 21.00 WIB\n📅 Sabtu: 08.00 - 17.00 WIB\n📅 Minggu & Libur: Tutup\n\nUntuk perpustakaan buka sampai pukul 22.00 pada hari Senin-Jumat.';
    }
    
    if (input.includes('lokasi') || input.includes('fakultas') || input.includes('gedung')) {
      return 'Lokasi Fakultas di Kampus:\n\n🏛️ Gedung A: Fakultas Teknik\n🏛️ Gedung B: Fakultas Ekonomi & Bisnis\n🏛️ Gedung C: Fakultas MIPA\n🏛️ Gedung D: Fakultas Ilmu Sosial\n🏛️ Gedung E: Fakultas Kedokteran\n\nPerpustakaan pusat berada di Gedung F lantai 1-3.';
    }
    
    if (input.includes('matkul') || input.includes('pendaftaran') || input.includes('krs')) {
      return 'Pendaftaran Mata Kuliah (KRS):\n\n✅ Periode KRS: Minggu ke-1 setiap semester\n✅ Batas maksimal: 24 SKS per semester\n✅ Akses melalui: Portal Akademik\n✅ Konsultasi wajib dengan Dosen Pembimbing Akademik\n\nJika ada kendala, hubungi Bagian Akademik.';
    }
    
    if (input.includes('kalender') || input.includes('jadwal') || input.includes('akademik')) {
      return 'Kalender Akademik Semester Ini:\n\n📆 Minggu 1-2: Pengisian KRS\n📆 Minggu 3-14: Perkuliahan\n📆 Minggu 8: UTS (Ujian Tengah Semester)\n📆 Minggu 15-16: UAS (Ujian Akhir Semester)\n📆 Minggu 17: Pengumuman Nilai\n\nLibur semester: 2 minggu setelah UAS.';
    }
    
    if (input.includes('kontak') || input.includes('telepon') || input.includes('email') || input.includes('hubungi')) {
      return 'Kontak Layanan Kampus:\n\n📞 Bagian Akademik: (021) 1234-5678\n📧 Email: akademik@kampus.ac.id\n📞 IT Support: (021) 1234-5679\n📧 Email: support@kampus.ac.id\n📞 Kemahasiswaan: (021) 1234-5680\n\nLayanan tersedia Senin-Jumat, 08.00-16.00 WIB.';
    }
    
    if (input.includes('beasiswa') || input.includes('bantuan') || input.includes('biaya')) {
      return 'Program Beasiswa yang Tersedia:\n\n🎓 Beasiswa Prestasi Akademik (IPK ≥ 3.5)\n🎓 Beasiswa Ekonomi (untuk mahasiswa kurang mampu)\n🎓 Beasiswa Atlet (untuk mahasiswa berprestasi olahraga)\n🎓 Beasiswa Organisasi (untuk aktivis kampus)\n\nPendaftaran dibuka setiap awal semester. Info lengkap di Bagian Kemahasiswaan.';
    }
    
    if (input.includes('perpustakaan') || input.includes('buku')) {
      return 'Layanan Perpustakaan:\n\n📚 Peminjaman buku: Maksimal 5 buku, 14 hari\n📚 Ruang baca: 300 kursi tersedia\n📚 Komputer & WiFi gratis\n📚 Database jurnal online\n📚 Ruang diskusi grup\n\nBuka: Senin-Jumat 07.00-22.00, Sabtu 08.00-17.00';
    }
    
    if (input.includes('ukt') || input.includes('pembayaran') || input.includes('spp')) {
      return 'Informasi Pembayaran UKT:\n\n💰 Pembayaran dilakukan per semester\n💰 Batas pembayaran: Minggu ke-2 semester\n💰 Metode: Transfer bank, Virtual Account, atau langsung ke Kasir\n💰 Untuk keringanan, ajukan ke Bagian Keuangan dengan surat permohonan\n\nLewat batas waktu akan dikenakan denda 2% per bulan.';
    }
    
    if (input.includes('wisuda') || input.includes('kelulusan') || input.includes('lulus')) {
      return 'Informasi Wisuda:\n\n🎓 Wisuda diadakan 2x setahun (Juni & Desember)\n🎓 Syarat: Sudah menyelesaikan semua SKS & Skripsi/Tugas Akhir\n🎓 Pendaftaran: 3 bulan sebelum pelaksanaan\n🎓 Biaya wisuda: Rp 2.500.000 (termasuk toga)\n\nHubungi Bagian Kemahasiswaan untuk pendaftaran.';
    }
    
    return `Maaf, saya belum memiliki informasi spesifik tentang "${userInput}".\n\nBerikut topik yang bisa saya bantu:\n\n${availableTopics.join('\n')}\n\nAtau Anda bisa menghubungi Bagian Akademik di (021) 1234-5678 untuk informasi lebih lanjut. 😊`;
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = {
      type: 'user',
      text: input,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getBotResponse(userMessage.text),
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (key) => {
    const questions = {
      jam: 'Jam operasional kampus',
      lokasi: 'Lokasi fakultas',
      matkul: 'Pendaftaran mata kuliah',
      kalender: 'Kalender akademik',
      kontak: 'Kontak layanan',
      beasiswa: 'Beasiswa'
    };
    
    setInput(questions[key]);
    // Optionally trigger send immediately after setting input for a full quick action flow
    // handleSend() is not called here to allow the user to review the pre-filled question.
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper component for message bubble
  const MessageBubble = ({ msg, darkMode }) => (
    <div
      key={msg.time}
      className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        msg.type === 'user'  
          ? 'bg-gradient-to-br from-purple-500 to-pink-500'  
          : darkMode  
            ? 'bg-gradient-to-br from-blue-600 to-indigo-700'
            : 'bg-gradient-to-br from-blue-500 to-indigo-500'
      }`}>
        {msg.type === 'user' ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      {/* Content */}
      <div className={`flex flex-col max-w-xl ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-3 rounded-2xl ${
          msg.type === 'user'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            : darkMode
              ? 'bg-gray-700 text-gray-100'
              : 'bg-gray-100 text-gray-800'
        }`}>
          <p className="whitespace-pre-line">{msg.text}</p>
        </div>
        <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} mt-1 px-2`}>{msg.time}</span>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'} transition-colors duration-300`}>
      {/* Top Navigation (Fixed/Sticky behavior is better for mobile) */}
      <nav className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex items-center justify-between transition-colors duration-300`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
            aria-label="Toggle Sidebar"
          >
            <Menu className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>
          <div className="flex items-center gap-3">
            <div className={`${darkMode ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-600 to-indigo-600'} rounded-full p-2`}>
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Chatbot Asisten Akademik
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} hidden sm:block`}>
                Informasi Kampus 24/7
              </p>
            </div>
          </div>
        </div>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 max-w-[80vw] ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transform transition-transform duration-300 z-50 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 overflow-y-auto h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Menu</h2>
            <button
              onClick={() => setShowSidebar(false)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              aria-label="Close Sidebar"
            >
              <X className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>

          {/* Team Members */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Users className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Anggota Kelompok
              </h3>
            </div>
            <ul className="space-y-3">
              {teamMembers.map((member, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                >
                  <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-500 to-indigo-500'} flex items-center justify-center text-white font-semibold text-sm`}>
                    {member.charAt(0)}
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {member}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Available Topics */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Topik Tersedia
              </h3>
            </div>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {availableTopics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* Main Chat Container - Adjusted height for full viewport experience on mobile/desktop */}
      <div className="p-4" style={{ height: 'calc(100vh - 72px)' }}> {/* Assuming nav height is ~72px */}
        <div className={`w-full max-w-4xl mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-colors duration-300`} style={{ height: '100%' }}>
          
          {/* Chat Header */}
          <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} text-white p-4 sm:p-6 flex items-center gap-4 border-b transition-colors duration-300`}>
            <div className={`${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-full p-2 sm:p-3`}>
              <Bot className={`w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Asisten Akademik</h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-blue-100'} text-sm`}>
                Siap membantu Anda 24/7
              </p>
            </div>
          </div>

          {/* Quick Questions */}
          <div className={`${darkMode ? 'bg-gray-750 border-gray-700' : 'bg-gray-50 border-gray-200'} border-b p-3 sm:p-4 overflow-x-auto transition-colors duration-300`}>
            <div className="flex gap-2 min-w-max">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(q.key)}
                  className={`flex items-center gap-1 px-3 py-2 ${darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300'} border rounded-full transition-all text-xs sm:text-sm whitespace-nowrap shadow-sm`}
                >
                  <q.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{q.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} msg={msg} darkMode={darkMode} />
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${darkMode ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : 'bg-gradient-to-br from-blue-500 to-indigo-500'} flex items-center justify-center`}>
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-4 py-3 rounded-2xl`}>
                  <div className="flex gap-1">
                    <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-400'} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                    <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-400'} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
                    <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-400'} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} border-t p-4 transition-colors duration-300`}>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pertanyaan Anda..."
                className={`flex-1 px-4 py-3 border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500' : 'border-gray-200 bg-white text-gray-800 focus:border-blue-500'} rounded-full focus:outline-none transition-colors shadow-inner`}
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={input.trim() === '' || isTyping}
                className={`${(input.trim() === '' || isTyping) 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : darkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'} 
                    text-white px-4 sm:px-6 py-3 rounded-full transition-all shadow-lg flex items-center justify-center`}
                aria-label="Kirim Pesan"
              >
                <Send className="w-5 h-5" />
                <span className="ml-2 hidden sm:block">Kirim</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
