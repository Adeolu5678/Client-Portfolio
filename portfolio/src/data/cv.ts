// CV Data — Dr. Mary Abiola Adeoye

export interface Personal {
  name: string;
  surname: string;
  title: string;
  designation: string;
  role: string;
  organisation: string;
  email: string;
  orcid: string;
  phone: string[];
  address: string;
  origin: string;
  languages: string[];
  researchInterest: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  period: string;
  highlight: boolean;
}

export interface ExperienceItem {
  role: string;
  division?: string;
  organisation: string;
  period: string;
  current: boolean;
}

export interface Thesis {
  author: string;
  year: number;
  title: string;
  type: string;
  institution: string;
}

export interface Book {
  author?: string;
  authors?: string;
  year: number;
  title: string;
  publisher: string;
  location: string;
}

export interface Chapter {
  author: string;
  year: number;
  title: string;
  book: string;
  editor: string;
  publisher: string;
  location: string;
}

export interface JournalArticle {
  authors: string;
  year: number;
  title: string;
  journal: string;
  details?: string;
  doi?: string;
  month?: string;
}

export interface GenericArticle {
  author: string;
  year: number;
  title: string;
  venue: string;
  pages?: string;
  month?: string;
}

export interface Publications {
  theses: Thesis[];
  books: Book[];
  coAuthored: Book[];
  chapters: Chapter[];
  journals: JournalArticle[];
  articles: GenericArticle[];
}

export interface PeerReviewItem {
  title: string;
  journal: string;
}

export interface AwardItem {
  title: string;
  body: string;
  year: number;
}

export interface ProfCert {
  title: string;
  year: number;
}

export interface Referee {
  name: string;
  title: string;
  organisation: string;
  address: string;
  tel: string[];
  email: string;
}

export const personal: Personal = {
  name: "Mary Abiola Adeoye",
  surname: "Adeoye",
  title: "PhD",
  designation: "Doctor of Philosophy in Religious Ethics",
  role: "National Coordinator, Literacy Education Division",
  organisation: "Nigerian Baptist Convention",
  email: "abiolaadeoye50@gmail.com",
  orcid: "0009-0008-5921-8270",
  phone: ["+234 806 526 7938", "+234 815 999 1912"],
  address: "Baptist Building, Oke-Bola, PMB 5113, Ibadan, Nigeria",
  origin: "Ibadan, Oyo State, Nigeria",
  languages: ["Yoruba", "English"],
  researchInterest:
    "My research focuses on appraising counselling techniques for young people, examined through the lens of Religious Ethics. I bring rigorous theological inquiry to the intersection of pastoral care, youth counselling, and modern pedagogical frameworks — contributing to scholarship that shapes both the church and the academy.",
};

export const education: EducationItem[] = [
  {
    degree: "Doctor of Philosophy in Religious Ethics",
    institution: "Crowther Graduate Theological Seminary",
    affiliation: "In Affiliation to Ajayi Crowther University, Oyo",
    location: "Abeokuta, Ogun State, Nigeria",
    period: "2018–2023",
    highlight: true,
  },
  {
    degree: "Master of Education, Christian Education",
    institution: "University of Jos",
    location: "Nigeria",
    period: "2013",
    highlight: false,
  },
  {
    degree: "Master of Theology in Religious Education",
    institution: "The Nigerian Baptist Theological Seminary",
    location: "Ogbomoso, Oyo State, Nigeria",
    period: "2007–2009",
    highlight: false,
  },
  {
    degree: "Bachelor of Religious Education",
    institution: "The Nigerian Baptist Theological Seminary",
    location: "Ogbomoso, Oyo State, Nigeria",
    period: "1999–2003",
    highlight: false,
  },
  {
    degree: "Nigeria Certificate in Education (Business Education)",
    institution: "St. Andrew's College of Education",
    location: "Oyo, Oyo State",
    period: "1990–1993",
    highlight: false,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "National Coordinator, Literacy Education Division",
    division: "Christian Education Department",
    organisation: "Nigerian Baptist Convention Headquarters",
    period: "2021–Present",
    current: true,
  },
  {
    role: "Principal Ministerial Officer, Family Life Education Division",
    division: "Christian Education Department",
    organisation: "Nigerian Baptist Convention Headquarters",
    period: "2013–2020",
    current: false,
  },
  {
    role: "Pastor of Youth/Teenagers",
    organisation: "First Baptist Church, Bosso Road, Minna, Niger-State",
    period: "2009–2013",
    current: false,
  },
  {
    role: "Chaplain, Niger Baptist Schools",
    organisation: "Bosso-Road, Minna, Niger-State",
    period: "2006–2009",
    current: false,
  },
  {
    role: "Head of Department",
    organisation: "Niger Baptist Schools, Minna, Niger-State",
    period: "2005–2006",
    current: false,
  },
  {
    role: "Founder & School Proprietor",
    organisation: "Providence Baptist Model School, Old Karmo, Abuja",
    period: "2002–2005",
    current: false,
  },
  {
    role: "Computer Secretary",
    organisation: "International Institute of Tropical Agriculture, Ibadan",
    period: "1994–1996",
    current: false,
  },
];

export const publications: Publications = {
  theses: [
    {
      author: "Adeoye, Mary Abiola",
      year: 2023,
      title:
        "Ethical Appraisal of Counselling Techniques for Young People in Selected Churches in Ibadan Baptist Conference, Ibadan, Oyo State, Nigeria",
      type: "Doctor of Philosophy",
      institution: "Crowther Graduate Theological Seminary, Igbein, Abeokuta",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2013,
      title:
        "The Effectiveness of T-Group Counseling Technique on the Attitude of Female Secondary School Students Towards Pre-marital Sex and Abortion",
      type: "Master of Education",
      institution: "University of Jos, Nigeria",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2009,
      title:
        'The Effectiveness of "T-Group Counseling Technique on the Attitude of Female Secondary School Students Towards Pre-marital Sex and Abortion',
      type: "Master of Theology",
      institution:
        "The Nigerian Baptist Theological Seminary, Ogbomoso, Oyo State",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2003,
      title: "Effective Ministry to Singles and Single-Adults",
      type: "Degree Essay",
      institution: "Nigerian Baptist Theological Seminary, Ogbomoso, Oyo State",
    },
  ],
  books: [
    {
      author: "Adeoye, Mary Abiola",
      year: 2012,
      title: "Training Manual for Teenagers and Children Workers",
      publisher: "GASDOC Prints",
      location: "Minna",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2010,
      title: "Guiding Children and Teenagers in a Local Church",
      publisher: "GASDOC Prints",
      location: "Minna",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2009,
      title: "Effective Children's Ministry in Churches",
      publisher: "GASDOC Prints",
      location: "Minna",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2007,
      title: "Teenagers for Christ",
      publisher: "GASDOC Prints",
      location: "Minna",
    },
  ],
  coAuthored: [
    {
      authors: "Ola, Foluke Bosede, Adeoye, Mary Abiola & Aborowa, Olugbenga",
      year: 2026,
      title: "Preschoolers Primer: Learning Alphabets in Bible Terms, Volume 2",
      publisher: "BP Productions",
      location: "Ibadan",
    },
    {
      authors: "Ola, Foluke Bosede, Adeyemo, Solomon O. & Adeoye, Mary Abiola",
      year: 2023,
      title: "Literacy Primer: Learning Cursive Writing",
      publisher: "Edimeth Consult",
      location: "Ibadan",
    },
    {
      authors: "Adeyemo, Solomon O. & Adeoye, Mary Abiola",
      year: 2022,
      title: "Preschoolers Primer: Learning Alphabets in Bible Terms",
      publisher: "BP Productions",
      location: "Ibadan",
    },
  ],
  chapters: [
    {
      author: "Adeoye, Mary A.",
      year: 2014,
      title:
        "The Postmodern Pastor's Responsibilities to Teenagers in the Church",
      book: "Effective Contemporary Shepherding: A Practical Theology for the 21st Century Pastoral Ministry",
      editor: "Samuel A. Alabi (Ed.)",
      publisher: "Simple Creations",
      location: "Ibadan",
    },
  ],
  journals: [
    {
      authors: "Adeoye, Mary Abiola",
      year: 2025,
      title:
        "The Digital Peacebuilder's Dilemma: Exploring Opportunities, Challenges and Future Directions",
      journal:
        "The Religious and Digital Peacebuilder: A Book of Readings in Honour of Adebayo Ola Afolaranmi, PhD (Volume One)",
      details: "AFBOR Chapter Three, pp. 15–19. Amazon.",
      doi: "https://doi.org/10.5281/zenodo.17615454",
      month: "November 2025",
    },
    {
      authors: "Adeoye, Mary Abiola",
      year: 2025,
      title:
        "Moral Issues in Pastoral Care and Counselling: Challenges and Opportunities for Professionals in Africa",
      journal: "Journal of Nigerian Association of Pastoral Counsellors",
      details:
        "Department of Religious and Intercultural Studies, Lead City University, Ibadan. Print 2971-5199, Online 2971-5202, Volume 4",
      month: "January 2025",
    },
    {
      authors: "Ojo, S.O., Adeoye, M.A., & Afolaranmi, A.O.",
      year: 2025,
      title:
        "Ecclesiastical Leadership in the Digital Age: Leveraging Technology for Ministry and Entrepreneurial Success",
      journal: "International Journal of Religions and Peacebuilding",
      details: "2(1), 1–21",
      doi: "https://doi.org/10.5281/zenodo.15069191",
    },
    {
      authors: "Adeoye, Mary Abiola & Azeez, Nurudeen Oluwadare",
      year: 2025,
      title:
        "Supervisory Competence and Institutional Capacity as Predictors of Quality Assurance in South-West Nigerian Secondary Schools",
      journal: "Aminu Kano Academic Scholars Association (AKASA M-J)",
      details: "Vol 1, Issue 3",
      month: "August 2025",
    },
    {
      authors: "Azeez, Nurudeen Oluwadare & Adeoye, Mary Abiola",
      year: 2025,
      title:
        "Enhancing Teacher Supervision for Professional Growth in Public Secondary Schools in Oyo State, Nigeria",
      journal: "International Journal of Educational Research and Development",
    },
    {
      authors: "Isa, Peter G., Adeoye, Mary Abiola & Afolaranmi, Adebayo Ola",
      year: 2026,
      title:
        "Determinants of Juvenile Delinquency and Community-Based Mitigation Strategies: A Case Study of Kaltungo Local Government Area, Gombe State, Nigeria",
      journal: "Impact International Journals and Publications (IIJP)",
      details: "Volume 2, Issue 1",
    },
  ],
  articles: [
    {
      author: "Adeoye, Mary Abiola",
      year: 2024,
      title: "Trending Issues in Literacy Education Division",
      venue:
        "Staying and Going; Trending Issues in Christian Education Department Ministry, Resource Booklet for 2024 CED Conference",
      pages: "45–49",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2022,
      title: "Freshness in Literacy Education Ministry",
      venue:
        "Freshness in Christian Education Ministries, Resource Booklet for 2022 CED Conference",
      pages: "33–43",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2021,
      title:
        "Building a Purposeful Literacy Education Ministry within Christian Education Ministry",
      venue: "Resource Booklet for 2021 CED Conference",
      pages: "25–36",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2020,
      title: "Celebrating Motherhood",
      venue: "The Nigerian Baptist",
      month: "May 2020",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2018,
      title: "Teenagers Revamping the Nation",
      venue: "Resource Booklet for 2018 CED Conference",
      pages: "6–10",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2018,
      title: "Discrimination",
      venue: "Being Godly Teenagers, Volume 4",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2017,
      title: "Walking With God",
      venue: "Being Godly Teenagers, Volume 3",
      pages: "1–19",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2017,
      title: "Building Self Confidence in Your Teenager",
      venue: "Family Life Magazine, Volume 8",
      pages: "7–8",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2016,
      title: "He Wants to Marry Me, What Next?",
      venue: "Family Life Magazine, Volume 7",
      pages: "9",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2016,
      title: "A Balanced Ministry to Teenagers",
      venue: "Resource Booklet for 2016 CED Conference",
      pages: "16–25",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2016,
      title: "God's Wonderful Works",
      venue: "Being Godly Teenagers, Volume 2",
      pages: "1–18",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2015,
      title: "How to Develop a Balanced Teenager's Ministry",
      venue: "Resource Booklet for 2015 CED Conference",
      pages: "36–45",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2015,
      title: "Created to be an Active and Productive Teenager",
      venue: "Family Life Magazine, Volume 6",
      pages: "5–6",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2014,
      title:
        "Leading Teenagers to Look Unto Jesus in the Use of Social Networking",
      venue: "Resource Booklet for 2014 CED Conference",
      pages: "12–19",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2014,
      title: "Examination Malpractices and Our Future as a Nation",
      venue: "Family Life Magazine, Volume 5",
      pages: "12–13",
    },
    {
      author: "Adeoye, Mary Abiola",
      year: 2014,
      title: "The Utmost in Life",
      venue: "Being Godly Teenagers, Volume 1",
      pages: "1–18",
    },
  ],
};

export const peerReview: PeerReviewItem[] = [
  {
    title:
      "Single-Parent Households and Academic Achievement Implications for Counselling",
    journal: "International Journal of Religious Peacebuilding",
  },
  {
    title:
      "Faith, Fake News, and Facebook: Christian Religious Studies (CRS) for Ethical Digital Citizenship",
    journal:
      "The Religious and Digital Peacebuilder: A Book of Readings in Honour of Adebayo Ola Afolaranmi, PhD (Volume One)",
  },
  {
    title:
      "The Digital Peacebuilder's Dilemma: Exploring Opportunities, Challenges and Future Directions",
    journal: "The Religious and Digital Peacebuilder (Volume One)",
  },
  {
    title:
      "Pastoral Counselling and Psychological Approaches in a Nigerian Technological-Driven Society",
    journal:
      "The Pastoral Counsellors: Journal of Nigerian Association of Pastoral Counsellors",
  },
  {
    title:
      "Effects of Guidance and Counselling on the Academic Performance of Secondary School Students in Kaltungo Local Government Area of Gombe State, Nigeria",
    journal: "International Journal of Religions and Peacebuilding",
  },
  {
    title:
      "Impact of Artificial Intelligence on Religious Experience and Worship in 21st-Century African Pentecostalism",
    journal: "International Journal of Religions and Peacebuilding",
  },
  {
    title:
      "Influence of Parental Involvement and Religious Education on Students' Pro-Social Behaviour and Holistic Wellbeing in a Technological Society",
    journal:
      "The Pastoral Counsellors: Journal of Nigerian Association of Pastoral Counsellors",
  },
  {
    title:
      "Effects of Nouthetic Counselling on Behavioural Changes of Students from Broken Homes in Selected Secondary Schools in Ibadan North Local Government, Oyo State, Nigeria",
    journal:
      "The Pastoral Counsellors: Journal of Nigerian Association of Pastoral Counsellors",
  },
  {
    title:
      "Digital Literacy and Responsible Technology Use in Parenting: An Assessment among Parents of In-School Adolescents in Ibadan",
    journal: "International Journal of Religions and Peacebuilding",
  },
  {
    title:
      "The Impact of Faith on Sustainable Living Practices: A Call for Integrated Pastoral Counselling and Action in Nigeria",
    journal:
      "The Pastoral Counsellors: Journal of Nigerian Association of Pastoral Counsellors",
  },
  {
    title:
      "Single-Parent Households and Academic Achievement Implication for Counselling",
    journal: "International Journal of Religions and Peacebuilding",
  },
  {
    title:
      "Assessment of the Role of Career Counsellors in Addressing Career Choice Conflicts In Secondary Schools in Karu Local Government Area, Nasarawa State",
    journal: "International Journal of Religions and Peacebuilding",
  },
];

export const memberships: string[] = [
  "American Psychological Association (APA) — Member, 2026",
  "African Society for the Study of Sociology and Ethics of Religions (ASSOSER) — Member",
];

export const awards: AwardItem[] = [
  {
    title: "Service Award",
    body: "Women Missionary Union of Abuja Baptist Association, FCT, Abuja",
    year: 2019,
  },
  {
    title: "Outstanding Mother of the Year",
    body: "Baptist Student Fellowship, First Baptist Church, Bosso-Road, Minna",
    year: 2012,
  },
  {
    title: "Excellent Award",
    body: "Youth Fellowship, First Baptist Church, Bosso-Road, Minna",
    year: 2011,
  },
];

export const professionalCerts: ProfCert[] = [
  {
    title: "Certificate of Membership, American Psychological Association",
    year: 2026,
  },
  { title: "Certificate of Training in Youth Ministry (ICYM)", year: 2025 },
  {
    title:
      "Diploma Certificate, International Christian Chaplains Academy (IFCCI)",
    year: 2024,
  },
  { title: "Teachers Registration Certificate", year: 2007 },
  { title: "Certificate in Computer (IITA, Ibadan)", year: 1994 },
];

export const referees: Referee[] = [
  {
    name: "Rev. Dr Mrs Foluke Bosede Ola",
    title: "Director, Christian Education Department",
    organisation: "Nigerian Baptist Convention",
    address: "Baptist Building, Oke-Bola, Ibadan, Oyo State, Nigeria",
    tel: ["+234 802 646 8182", "+234 815 999 0123"],
    email: "olafoluke@yahoo.co.uk",
  },
  {
    name: "Professor Jacob Kehinde Ayantayo",
    title:
      "Professor of Religious Ethics, Religious Peace and Conflict Studies",
    organisation: "Department of Religious Studies, University of Ibadan",
    address: "Ibadan, Oyo State, Nigeria",
    tel: ["+234 803 429 7780", "+234 817 336 5771"],
    email: "ayantayokehinde@gmail.com",
  },
  {
    name: "Ven. Dr. Ayo Atowoju",
    title: "Head, Faculty of Post Graduate Studies",
    organisation: "Crowther Graduate Theological Seminary",
    address: "Igbein, Abeokuta, Ogun State, Nigeria",
    tel: ["+234 803 672 6849"],
    email: "atowojuayodeleade@gmail.com",
  },
];
