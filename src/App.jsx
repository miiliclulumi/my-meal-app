import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState(1)
  const [mealPhoto, setMealPhoto] = useState(null)
  const [selectedChange, setSelectedChange] = useState('vegetables')

  const [foods, setFoods] = useState([
    'Rice — 1 bowl',
    'Chicken — 1 portion',
    'Vegetables — small portion',
  ])

  function handlePhoto(event) {
    const file = event.target.files?.[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setMealPhoto(imageUrl)
      setScreen(3)
    }
  }

  function editFood(index) {
    const result = window.prompt('Edit food item:', foods[index])

    if (result && result.trim() !== '') {
      const updated = [...foods]
      updated[index] = result
      setFoods(updated)
    }
  }

  function addFood() {
    const result = window.prompt('Add food item:')

    if (result && result.trim() !== '') {
      setFoods([...foods, result])
    }
  }

  function resetApp() {
    setScreen(1)
    setMealPhoto(null)
    setSelectedChange('vegetables')
    setFoods([
      'Rice — 1 bowl',
      'Chicken — 1 portion',
      'Vegetables — small portion',
    ])
  }

  function changeText() {
    if (selectedChange === 'rice') {
      return 'Have a little less rice.'
    }

    if (selectedChange === 'water') {
      return 'Choose water instead of a sweet drink.'
    }

    return 'Add one extra serving of vegetables.'
  }

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          font-family: Arial, sans-serif;
          color: #173c2c;
        }

        button, input {
          font-family: inherit;
        }

        .app {
          width: 100%;
          min-height: 100vh;
          background: #eeeeee;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
        }

        .phone {
          width: 390px;
          min-height: 760px;
          background: #f7fbf4;
          border-radius: 28px;
          padding: 28px 24px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.10);
        }

        .brand {
          color: #238354;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 2px;
          margin: 0 0 12px;
        }

        h1 {
          font-size: 28px;
          margin: 0;
          color: #173c2c;
        }

        h2 {
          font-size: 19px;
          margin-top: 25px;
          margin-bottom: 10px;
        }

        h3 {
          font-size: 15px;
          margin-top: 18px;
        }

        .step {
          color: #7d8a83;
          font-size: 12px;
          margin-top: 6px;
          margin-bottom: 28px;
        }

        .description {
          color: #68776f;
          font-size: 14px;
          line-height: 1.5;
        }

        .meal-card,
        .photo-card {
          margin-top: 22px;
          background: #deedd9;
          border-radius: 18px;
          padding: 28px 20px;
          text-align: center;
        }

        .meal-icon,
        .photo-icon {
          font-size: 60px;
        }

        .meal-card p,
        .photo-card p {
          color: #68776f;
          margin-bottom: 0;
        }

        .info-card {
          margin-top: 18px;
          background: #e8f3d8;
          padding: 16px;
          border-radius: 14px;
        }

        .info-card p {
          color: #718077;
          font-size: 12px;
          margin-bottom: 0;
        }

        .main-button,
        .secondary-button {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
        }

        .main-button {
          margin-top: 28px;
          border: none;
          background: #238354;
          color: white;
        }

        .main-button:hover {
          background: #1d7048;
        }

        .secondary-button {
          display: block;
          text-align: center;
          margin-top: 12px;
          border: 1px solid #238354;
          background: white;
          color: #238354;
        }

        .back-button {
          display: block;
          margin: 18px auto 0;
          border: none;
          background: transparent;
          color: #68776f;
          cursor: pointer;
        }

        .footer {
          text-align: center;
          color: #909a95;
          font-size: 11px;
          margin-top: 14px;
        }

        .uploaded-photo {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-radius: 16px;
          margin-top: 15px;
        }

        .food-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px;
          margin-bottom: 10px;
          border-radius: 12px;
          background: #fff4df;
          font-size: 13px;
        }

        .food-row:nth-child(2) {
          background: #fdebe7;
        }

        .food-row:nth-child(3) {
          background: #e5f3df;
        }

        .edit-button,
        .add-button {
          border: none;
          background: transparent;
          color: #238354;
          font-weight: bold;
          cursor: pointer;
        }

        .add-button {
          padding: 8px 0;
        }

        .score-card {
          background: #24774f;
          color: white;
          border-radius: 18px;
          padding: 26px;
          text-align: center;
        }

        .score-circle {
          width: 120px;
          height: 120px;
          border: 7px solid #d8ef9f;
          border-radius: 50%;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .score-circle strong {
          font-size: 47px;
        }

        .score-circle span {
          font-size: 9px;
        }

        .balance-card {
          background: white;
          border: 1px solid #dce5df;
          border-radius: 14px;
          padding: 16px;
        }

        .balance-card p {
          color: #617269;
          margin: 6px 0;
          font-size: 13px;
        }

        .suggestion-card {
          margin-top: 14px;
          background: #fff0da;
          border-radius: 14px;
          padding: 16px;
        }

        .suggestion-card p {
          margin-bottom: 0;
          color: #68776f;
          font-size: 13px;
        }

        .change-card {
          margin-top: 13px;
          padding: 17px;
          border: 1px solid #ccdccc;
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: #e5f1df;
        }

        .change-card.yellow {
          background: #fff0da;
        }

        .change-card.blue {
          background: #e5f1f7;
        }

        .change-card.selected {
          background: #dff0d9;
          border: 2px solid #238354;
        }

        .change-card p {
          font-size: 12px;
          color: #708078;
          margin: 5px 0 0;
        }

        .radio {
          font-size: 20px;
          color: #238354;
        }

        .improved-card {
          background: #238354;
          color: white;
          border-radius: 18px;
          text-align: center;
          padding: 30px;
          margin-top: 24px;
        }

        .improved-number {
          font-size: 43px;
          font-weight: bold;
        }

        .improved-card p {
          font-size: 12px;
        }

        .before-after {
          display: flex;
          gap: 12px;
          margin-top: 15px;
        }

        .mini-score {
          flex: 1;
          background: white;
          border: 1px solid #dce5df;
          border-radius: 14px;
          padding: 18px;
        }

        .mini-score.after {
          background: #dff0d5;
        }

        .mini-score span {
          display: block;
          color: #7b8982;
          font-size: 10px;
          margin-bottom: 8px;
        }

        .mini-score strong {
          font-size: 21px;
        }

        .mini-score.after strong {
          color: #238354;
        }
      `}</style>

      <div className="app">
        <div className="phone">

          {/* SCREEN 1 */}
          {screen === 1 && (
            <>
              <p className="brand">MY MEAL</p>
              <h1>My Meal</h1>
              <p className="step">Step 1 of 6</p>

              <h2>How balanced is your meal?</h2>

              <p className="description">
                Take a meal photo and find one simple way to improve it.
              </p>

              <div className="meal-card">
                <div className="meal-icon">🥗</div>
                <p>A little balance, every day</p>
              </div>

              <div className="info-card">
                <strong>Small changes, better balance</strong>
                <p>Photo → Check food → Make one change</p>
              </div>

              <button
                className="main-button"
                onClick={() => setScreen(2)}
              >
                Check My Meal
              </button>

              <p className="footer">
                Start with your next meal.
              </p>
            </>
          )}

          {/* SCREEN 2 */}
          {screen === 2 && (
            <>
              <p className="brand">MY MEAL</p>
              <h1>Take / Upload Meal Photo</h1>
              <p className="step">Step 2 of 6</p>

              <h2>Add a photo of your meal.</h2>

              <div className="photo-card">
                <div className="photo-icon">📷</div>
                <p>Capture your next delicious meal</p>
              </div>

              <p className="description">
                Keep the whole plate in the photo.
              </p>

              <label className="main-button" style={{display:'block', textAlign:'center'}}>
                Take Photo
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhoto}
                />
              </label>

              <label className="secondary-button">
                Upload from Gallery
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handlePhoto}
                />
              </label>

              <button
                className="back-button"
                onClick={() => setScreen(1)}
              >
                ← Back
              </button>
            </>
          )}

          {/* SCREEN 3 */}
          {screen === 3 && (
            <>
              <p className="brand">MY MEAL</p>
              <h1>Confirm Food</h1>
              <p className="step">Step 3 of 6</p>

              {mealPhoto && (
                <img
                  src={mealPhoto}
                  className="uploaded-photo"
                  alt="Meal"
                />
              )}

              <h2>Is this your food?</h2>

              {foods.map((food, index) => (
                <div className="food-row" key={index}>
                  <span>{food}</span>

                  <button
                    className="edit-button"
                    onClick={() => editFood(index)}
                  >
                    Edit
                  </button>
                </div>
              ))}

              <button
                className="add-button"
                onClick={addFood}
              >
                + Add missing food
              </button>

              <button
                className="main-button"
                onClick={() => setScreen(4)}
              >
                Confirm Food
              </button>

              <button
                className="back-button"
                onClick={() => setScreen(2)}
              >
                ← Back
              </button>
            </>
          )}

          {/* SCREEN 4 */}
          {screen === 4 && (
            <>
              <p className="brand">MY MEAL</p>
              <h1>Your Balance Score</h1>
              <p className="step">Step 4 of 6</p>

              <div className="score-card">
                <div className="score-circle">
                  <strong>60</strong>
                  <span>OUT OF 100</span>
                </div>

                <p>A good start. Room to grow.</p>
              </div>

              <h3>
                A little more veg can make a difference.
              </h3>

              <div className="balance-card">
                <strong>Meal balance</strong>
                <p>Carbohydrates: high</p>
                <p>Protein: enough</p>
                <p>Vegetables: low</p>
              </div>

              <div className="suggestion-card">
                <strong>Try one small change</strong>
                <p>Add one serving of vegetables.</p>
              </div>

              <button
                className="main-button"
                onClick={() => setScreen(5)}
              >
                Choose One Simple Change
              </button>

              <button
                className="back-button"
                onClick={() => setScreen(3)}
              >
                ← Back
              </button>
            </>
          )}

          {/* SCREEN 5 */}
          {screen === 5 && (
            <>
              <p className="brand">MY MEAL</p>
              <h1>One Simple Change</h1>
              <p className="step">Step 5 of 6</p>

              <h2>Tap one option to improve your meal.</h2>

              <div
                className={
                  selectedChange === 'vegetables'
                    ? 'change-card selected'
                    : 'change-card'
                }
                onClick={() => setSelectedChange('vegetables')}
              >
                <div>
                  <strong>🥦 Add more vegetables</strong>
                  <p>Add one extra serving</p>
                </div>

                <span className="radio">
                  {selectedChange === 'vegetables' ? '●' : '○'}
                </span>
              </div>

              <div
                className={
                  selectedChange === 'rice'
                    ? 'change-card selected'
                    : 'change-card yellow'
                }
                onClick={() => setSelectedChange('rice')}
              >
                <div>
                  <strong>🍚 Have a little less rice</strong>
                  <p>Reduce the rice portion</p>
                </div>

                <span className="radio">
                  {selectedChange === 'rice' ? '●' : '○'}
                </span>
              </div>

              <div
                className={
                  selectedChange === 'water'
                    ? 'change-card selected'
                    : 'change-card blue'
                }
                onClick={() => setSelectedChange('water')}
              >
                <div>
                  <strong>🥤 Choose water</strong>
                  <p>Swap a sweet drink for water</p>
                </div>

                <span className="radio">
                  {selectedChange === 'water' ? '●' : '○'}
                </span>
              </div>

              <p className="description">
                One choice. A healthier next step.
              </p>

              <button
                className="main-button"
                onClick={() => setScreen(6)}
              >
                View Improved Score
              </button>

              <button
                className="back-button"
                onClick={() => setScreen(4)}
              >
                ← Back
              </button>
            </>
          )}

          {/* SCREEN 6 */}
          {screen === 6 && (
            <>
              <p className="brand">MY MEAL</p>
              <h1>Your Improved Score</h1>
              <p className="step">Step 6 of 6</p>

              <div className="improved-card">
                <div className="improved-number">
                  60 → 80
                </div>

                <p>
                  +20 points • estimated improvement
                </p>
              </div>

              <h2>Small change. Better balance!</h2>

              <div className="before-after">
                <div className="mini-score">
                  <span>BEFORE</span>
                  <strong>60 / 100</strong>
                </div>

                <div className="mini-score after">
                  <span>AFTER</span>
                  <strong>80 / 100</strong>
                </div>
              </div>

              <div className="suggestion-card">
                <strong>Your simple change</strong>
                <p>{changeText()}</p>
              </div>

              <p className="description">
                Try this change at your next meal.
              </p>

              <button
                className="main-button"
                onClick={resetApp}
              >
                Back to Home
              </button>

              <p className="footer">
                Demo estimate, not a measured result.
              </p>
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default App
