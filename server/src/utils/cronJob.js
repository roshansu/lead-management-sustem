import cron from 'node-cron'
import Leads from '../models/leads.model.js';
import User from '../models/user.model.js';
import leadInsightEmail from './leadInsights.js'

function shuffleArray(arr) {
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// */1 * * * *
// 0 */2 * * *

const scheduleCron = async()=>{
    cron.schedule("0 */4 * * *", async () => {
  try {
        const [google, meta, website] = await Promise.all([
            fetch('https://api.mockaroo.com/api/a37f45d0?count=10&key=64196520'),
            fetch('https://api.mockaroo.com/api/1ccdcd50?count=10&key=64196520'),
            fetch('https://api.mockaroo.com/api/826c19e0?count=10&key=64196520')
        ])
        const [googleLead, metaLead, websiteLead] = await Promise.all([
            google.json(),
            meta.json(),
            website.json()
        ])

        let finalData = [
            ...googleLead,
            ...metaLead,
            ...websiteLead
        ]

        const user = await User.find()

        const email = []

        user.map((item)=>{
            email.push(item.email)
        })

        console.log(email)

        finalData = shuffleArray(finalData)

        await Leads.insertMany(finalData)

        leadInsightEmail(googleLead.length, metaLead.length, websiteLead.length, 30, email)
        // console.log(finalData)
  } catch (error) {
    console.error("Error fetching leads:", error.message);
  }
});
}

export default scheduleCron