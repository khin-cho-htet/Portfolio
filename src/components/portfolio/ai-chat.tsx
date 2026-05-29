
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { aiPortfolioChat } from '@/ai/flows/ai-portfolio-chat';

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim() || isLoading) return;

    const userMsg = question;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuestion("");
    setIsLoading(true);

    try {
      const response = await aiPortfolioChat({ question: userMsg });
      setMessages(prev => [...prev, { role: 'ai', text: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl z-50 bg-primary hover:bg-primary/90 transition-all ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare className="w-8 h-8 text-white" />
      </Button>

      <div className={`fixed bottom-8 right-8 w-80 md:w-96 bg-card border border-border rounded-2xl shadow-2xl z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="p-4 border-b border-border flex items-center justify-between bg-primary/10 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-headline">Career Assistant</h3>
              <p className="text-[10px] text-muted-foreground">AI Powered</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground text-sm pt-10">
              Hi! Ask me anything about Khin&apos;s experience or skills.
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-secondary text-foreground rounded-tl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary p-3 rounded-2xl rounded-tl-none">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border flex gap-2">
          <Input 
            placeholder="Type your question..." 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="rounded-full bg-secondary border-none"
          />
          <Button size="icon" onClick={handleSend} disabled={isLoading} className="rounded-full shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
