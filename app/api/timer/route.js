import { NextResponse } from 'next/server';

// In-memory storage (use a database in production)
let timerData = {
  inputValue: '',
  timer: '0',
  startTime: null,
  isActive: false
};

export async function POST(request) {
  const body = await request.json();
  
  // Save timer data with start timestamp
  timerData = {
    inputValue: body.inputValue,
    timer: body.timer,
    startTime: Date.now(), // Current timestamp in milliseconds
    isActive: body.timer !== '0'
  };
  
  return NextResponse.json({ 
    success: true, 
    message: 'Timer started!',
    data: timerData 
  });
}

export async function GET(request) {
  // Calculate remaining time based on elapsed time
  let remainingSeconds = 0;
  
  if (timerData.isActive && timerData.startTime) {
    const elapsedMs = Date.now() - timerData.startTime;
    const elapsedSeconds = Math.floor(elapsedMs / 1000);
    const totalSeconds = parseInt(timerData.timer) * 60;
    remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds);
    
    // If timer expired, mark as inactive
    if (remainingSeconds === 0) {
      timerData.isActive = false;
    }
  }
  
  return NextResponse.json({
    ...timerData,
    remainingSeconds
  });
}   