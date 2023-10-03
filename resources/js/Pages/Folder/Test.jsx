import React, { useState } from 'react';

function Test() {
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });

  // 画像読み込みが完了時の処理
  const handleImageLoad = (e) => {

    const canvas = document.createElement('canvas');
    canvas.className='shadow';
    //<canvas>要素生成された
    console.log('canvas',canvas);
    //Canvasを描画するためのコンテキストなり。要するにCanvasを操作し、描画を行う場所の確保をしている
    const ctx = canvas.getContext('2d');
    console.log('ctx',ctx);
    //eのターゲットが画像になっているため下記で取得できる
    const image = e.target;

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    // 画像からRGB情報を取得
    const pixel = ctx.getImageData(0, 0, 1, 1).data;
    console.log('pixel',pixel);
    const [r, g, b] = pixel;

    setRgb({ r, g, b });
  };

  return (
    <div>
      <img
        src="/img/sea.jpg"
        alt="Sample Image"
        onLoad={handleImageLoad}
        style={{ display: 'none' }} // 画像を非表示にする
      />
      <div
        style={{
          backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          width: '100px',
          height: '100px',
        }}
        className="rounded-full shadow"
      >
        <p className='text-xs font-bold'>Color Preview</p>
      </div>
    </div>
  );
}

export default Test;
