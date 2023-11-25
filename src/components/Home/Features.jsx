const features = [
  {
    name: "दूध उत्पादनात वाढ",
    description:
      "इष्टतम प्रजनन पद्धती, पोषण आणि आरोग्य सेवा दुग्धजन्य प्राण्यांमध्ये दूध उत्पादन वाढविण्यात योगदान देतात.",
  },
  {
    name: "प्राण्यांच्या आरोग्यामध्ये सुधारणा",
    description:
      "एक संतुलित आहार, नियमित पशुवैद्यकीय काळजी आणि रोग प्रतिबंधक उपाय एकूण प्राण्यांचे आरोग्य राखतात",
  },
  {
    name: "दुधाच्या फॅट सामग्रीमध्ये सुधारणा",
    description:
      "इष्ट गुणांसाठी आहार आणि अनुवांशिक निवड समायोजित केल्याने दुधातील चरबीचे प्रमाण वाढते.",
  },
  {
    name: "पुनरुत्पादक चक्र आणि उष्णता मध्यांतरांचे नियमितीकरण",
    description:
      "धोरणात्मक प्रजनन, हार्मोनल देखरेख आणि योग्य पोषण प्रजनन चक्रांचे नियमन करते, कार्यक्षम प्रजनन सुनिश्चित करते.",
  },
  {
    name: "प्राण्यांची रोगप्रतिकारक शक्ती सुधारणे",
    description:
      "संतुलित आहार, लसीकरण आणि स्वच्छ वातावरण रोगप्रतिकारक शक्ती मजबूत करते, रोगाचा धोका कमी करते.",
  },
  {
    name: "चयापचय रोग आणि कमतरता पासून प्रतिबंध",
    description:
      "योग्य पोषण, संतुलित आहार आणि पशुवैद्यकीय काळजी चयापचय रोगांना प्रतिबंधित करते, ज्यामुळे पशुधनाचे संपूर्ण आरोग्य सुनिश्चित होते.",
  },
];

export default function Features() {
  return (
    <div className="bg-white pt-10">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 md:py-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 border border-gray-300 rounded-md">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            गुरांच्या चाऱ्याचे फायदे{" "}
            <span className="text-4xl md:text-6xl">🐄 🌾</span>
          </h2>
          <p className="mt-4 text-gray-500">
            दूध उत्पादन, शरीराची देखभाल आणि पुनरुत्पादनासाठी पारंपारिक आहार
            पद्धतींमधून जनावरांना पुरेसे पोषण मिळत नाही. चांगल्या परिणामांसाठी
            कॅटल फीडची शिफारस केली जाते.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <span className=" text-xl">✨ </span>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/img1.jpeg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/img2.jpeg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/img3.jpeg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/img4.jpeg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
