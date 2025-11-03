import React, { useState, useEffect } from 'react';

export default function TestDzieckoWSieci() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Załaduj bibliotekę html2pdf
  useEffect(() => {
    if (!window.html2pdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      document.head.appendChild(script);
    }
  }, []);

  const questions = [
    "Zaraz po obudzeniu szuka telefonu lub tabletu, żeby sprawdzić wiadomości.",
    "Czuje się niespokojne lub smutne, kiedy nie ma dostępu do internetu. Po wejściu do sieci czuje się lepiej.",
    "Potrzebuje spędzać coraz więcej czasu w sieci.",
    "Nie wysypia się, bo w nocy za długo siedzi w sieci.",
    "W domu nie kończy tego, co robi, lub próbuje się wymigać z obowiązków, aby móc się zalogować do sieci.",
    "Zaprzestało aktywności, które wcześniej lubiło, po to by mieć więcej czasu na bycie w sieci.",
    "Często mówi, że wchodzi do internetu na kilka minut, a w rzeczywistości jest w nim bardzo długo.",
    "Nie przestrzega ograniczeń czasowych, które mu wyznaczyliśmy na bycie online.",
    "Kłamie na temat czasu, który spędza online lub ukrywa się, żeby wejść do internetu.",
    "Woli spędzać czas w internecie niż z resztą rodziny.",
    "Ma dużo przyjaciół online, ale rzadko się z nimi widuje.",
    "Dużo czasu spędza w domu, w swoim pokoju, podłączone do sieci.",
    "Często kładzie się spać bardzo późno, bo jest podłączone do sieci.",
    "Kłóci się z innymi (rodzina, przyjaciele) na temat czasu, który spędza w internecie.",
    "Przyjmuje postawę obronną lub irytuje się, kiedy ktoś pyta, co robi w sieci.",
    "Więcej czasu spędza w internecie niż z przyjaciółmi offline."
  ];

  const labels = ["Nigdy (1 pkt)", "Prawie nigdy (2 pkt)", "Czasem (3 pkt)", "Często (4 pkt)", "Bardzo często (5 pkt)"];
  const values = [1, 2, 3, 4, 5];

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0);
  };

  const getCategory = (score) => {
    if (score <= 40) return { name: "Umiarkowany", color: "bg-green-50 border-green-200" };
    if (score <= 67) return { name: "Intensywny", color: "bg-yellow-50 border-yellow-200" };
    return { name: "Problematyczny", color: "bg-red-50 border-red-200" };
  };

  const getSummary = (score) => {
    if (score <= 40) {
      return {
        title: "Korzystanie umiarkowane ✓",
        main: "Wydaje się, że Twoje dziecko korzysta z nowych technologii w odpowiedni sposób.",
        details: "Czasem spędza w internecie trochę za dużo czasu, ale wydaje się mieć nad tym kontrolę.",
        recommendation: "Kontynuuj obserwowanie nawyków i utrzymywanie otwartej komunikacji."
      };
    } else if (score <= 67) {
      return {
        title: "Korzystanie intensywne ⚠️",
        main: "Twoje dziecko może mieć problemy z powodu intensywnego korzystania z nowych technologii.",
        details: "Zwróć szczególną uwagę na czas spędzany przed ekranem, który ma wpływ na jego rozwój i dalsze życie.",
        recommendation: "Zweryfikuj i ustanów jasne zasady korzystania z sieci. Zaproponuj alternatywne aktywności."
      };
    } else {
      return {
        title: "Korzystanie problematyczne 🚨",
        main: "Sposób, w jaki Twoje dziecko korzysta z nowych technologii może być przyczyną poważnych problemów.",
        details: "Problemy mogą dotyczyć nie tylko dziecka, ale całej rodziny. Działaj szybko.",
        recommendation: "Natychmiast zweryfikuj zasady dotyczące czasu i aktywności w sieci. Rozważ konsultację ze specjalistą."
      };
    }
  };

  const handleAnswer = (questionIndex, value) => {
    setAnswers({
      ...answers,
      [questionIndex]: value
    });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert("Proszę odpowiedzieć na wszystkie pytania.");
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const category = getCategory(score);
  const summary = getSummary(score);
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 text-center border-t-4 border-indigo-600">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Moje dziecko w sieci
          </h1>
          <p className="text-gray-600 text-lg">Czy wszystko jest ok?</p>
          <p className="text-sm text-gray-500 mt-4">Test dla rodziców</p>
        </div>

        {/* Legenda */}
        {!submitted && (
          <div className="bg-indigo-600 text-white rounded-lg shadow-lg p-6 mb-6">
            <p className="font-bold text-lg mb-4">Skala odpowiedzi:</p>
            <div className="grid grid-cols-5 gap-2 text-sm">
              <div className="text-center">
                <div className="font-bold text-xl">1</div>
                <div className="text-xs mt-1">Nigdy</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">2</div>
                <div className="text-xs mt-1">Prawie nigdy</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">3</div>
                <div className="text-xs mt-1">Czasem</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">4</div>
                <div className="text-xs mt-1">Często</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">5</div>
                <div className="text-xs mt-1">Bardzo często</div>
              </div>
            </div>
          </div>
        )}

        {submitted ? (
          // Results Section
          <div id="result-section" className={`rounded-lg shadow-lg p-8 border-2 mb-6 ${category.color}`}>
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-indigo-600 mb-2">{score}</div>
              <div className="text-sm text-gray-600 mb-4">punktów na 80 możliwych</div>
              <div className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                {category.name}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{summary.title}</h2>
              <p className="text-lg font-semibold text-gray-700 mb-3">{summary.main}</p>
              <p className="text-gray-600 mb-4">{summary.details}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm font-semibold text-blue-900">💡 Rekomendacja:</p>
                <p className="text-blue-800">{summary.recommendation}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleReset}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Rozwiąż test ponownie
              </button>
            </div>
          </div>
        ) : (
          // Questions Section
          <>
            {/* Progress */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">Postęp</span>
                <span className="text-sm text-gray-600">{answeredCount} z {questions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800">
                      <span className="text-indigo-600 font-bold">{index + 1}.</span> {question}
                    </p>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {values.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAnswer(index, value)}
                        className={`p-3 rounded-lg font-semibold transition text-sm ${
                          answers[index] === value
                            ? 'bg-indigo-600 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                disabled={answeredCount !== questions.length}
                className={`w-full py-4 rounded-lg font-bold text-lg transition ${
                  answeredCount === questions.length
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {answeredCount === questions.length ? 'Oblicz wynik' : `Uzupełnij pozostałe pytania (${questions.length - answeredCount})`}
              </button>
            </div>
          </>
        )}

        {/* Info Box */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-8 text-sm text-gray-700">
          <p className="font-semibold mb-3">ℹ️ O tym teście:</p>
          <p className="mb-3">
            Ten test pomaga rodzicom ocenić wzorce korzystania z internetu przez ich dzieci. Wynik jest wskaźnikiem, a nie diagnozą medyczną.
          </p>
          <p className="text-xs border-t border-indigo-300 pt-3 mt-3">
            <span className="font-semibold">Źródło:</span> Test oparty na poradniku „Dzieci i ekrany – psychologowie odpowiadają na pytania rodziców" opracowanym w Fundacji Orange.
          </p>
        </div>
      </div>
    </div>
  );
}
