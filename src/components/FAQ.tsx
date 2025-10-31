import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FAQItem {
  question: string;
  answer: string;
}
const FAQ = () => {
  const faqItems: FAQItem[] = [{
    question: "What type of projects does Dynamo Group handle?",
    answer: "Dynamo Group operates across several sectors including Real Estate, Agriculture, Oil & Gas, Construction, Media, and Human Resource Development. We build estates, manage agro-layouts, install LPG plants, and provide training through our educational initiatives."
  }, {
    question: "Does Dynamo Group offer flexible payment plans for property buyers?",
    answer: "Yes! We provide affordable and flexible payment options to help clients own properties without financial stress. Payment plans can be tailored to suit your budget."
  }, {
    question: "Where are Dynamo Group branches located?",
    answer: "Our headquarters is in Abuja (Suite S:8b, SAY PLAZA, Utako), with additional branches in Anambra and Delta State, alongside ongoing projects across Nigeria."
  }, {
    question: "How can I invest in Dynamo Agro projects?",
    answer: "You can participate in our agricultural investment programs through Dynamo Agro Food and Farms Ltd. We offer palm seedling investments, rice production opportunities, and agro-layout partnerships."
  }, {
    question: "What is Dynamo Group's commitment to customer satisfaction?",
    answer: "We're committed to integrity, transparency, and delivering excellence in every sector. Our team ensures each client experiences reliable service, smooth transactions, and long-term value."
  }, {
    question: "How do I get started with Dynamo Group?",
    answer: "Simply contact us via 07017770440 or 07068068000, or visit www.dynamogroup.com.ng to connect with a representative about real estate, agro projects, or partnership opportunities."
  }];
  return <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* YouTube Video */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/y3bqLuUyTeI" title="Dynamo Group Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 py-1 leading-relaxed">
              Dynamo Agro Food and Farms Ltd
            </h3>
            <p className="text-foreground/80 text-lg leading-relaxed">This is our agricultural initiatives and farming projects that are transforming communities and creating sustainable growth opportunities across Nigeria.</p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold italic mb-6 text-primary">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-foreground/70 max-w-4xl mx-auto text-lg leading-relaxed">
            Welcome to our FAQ section, where we've answered common questions about our real estate, 
            agricultural, and business services. This will give you better insight into what we do at 
            Dynamo Group Ltd!
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqItems.map((item, index) => <Accordion key={index} type="single" collapsible className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-6 py-5 text-left font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-foreground/70 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>)}
        </div>
      </div>
    </section>;
};
export default FAQ;