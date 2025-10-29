import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import chatbotAvatar from "@/assets/chatbot-avatar.png";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm Dynamie, your AI assistant. How can I help you today with property investments, agricultural plans, or payment options?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "Thank you for your message! To enable real-time AI responses, please enable Lovable Cloud in your project settings. For now, I can help direct you to our contact form or provide information about our services.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button - Custom Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-20 h-20 sm:w-24 sm:h-24 shadow-gold hover:scale-110 smooth-transition animate-bounce-subtle"
        aria-label="Chat with Dynamie AI Assistant"
      >
        {isOpen ? (
          <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
            <X className="h-8 w-8 text-white" />
          </div>
        ) : (
            <img
              src={chatbotAvatar}
              alt="Dynamie AI Assistant"
              className="w-full h-full object-contain"
            />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] bg-card border-2 border-border rounded-2xl shadow-card-hover animate-scale-in flex flex-col h-[500px] max-h-[calc(100vh-8rem)]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-t-2xl flex items-center gap-3">
            <img
              src={chatbotAvatar}
              alt="Dynamie"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="font-bold text-lg">Dynamie</h3>
              <p className="text-sm text-white/90">AI Assistant</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {message.role === "assistant" && (
                    <img
                      src={chatbotAvatar}
                      alt="Dynamie"
                      className="w-10 h-10 object-contain flex-shrink-0"
                    />
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <img
                    src={chatbotAvatar}
                    alt="Dynamie"
                    className="w-10 h-10 object-contain flex-shrink-0"
                  />
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                type="submit"
                className="btn-gold"
                disabled={isLoading || !input.trim()}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
