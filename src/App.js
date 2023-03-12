import qrImg from './assets/image-qr-code.png';

function App() {
  return (
    <div
      className='flex items-center justify-center h-screen px-5 '
      style={{ backgroundColor: 'hsl(212, 45%, 89%)' }}
    >
      <div className='max-w-md w-[300px]   bg-white rounded-2xl  shadow-lg p-4'>
        <div className='h-64 overflow-hidden'>
          <img
            src={qrImg}
            alt='Placeholder'
            className='object-cover object-center h-full w-full rounded-lg'
          />
        </div>
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-800 mb-5'>
            Improve your front-end skills by building projects
          </h2>
          <p className='mt-2 text-gray-400 font-[15px] text-center'>
            Scan the QR code to visit! Frontend Mentor and take your coding
            skills to the next level!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
