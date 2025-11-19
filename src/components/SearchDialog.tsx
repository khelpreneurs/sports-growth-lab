import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchablePages = [
    { title: 'Home', path: '/', keywords: ['home', 'main', 'landing'] },
    { title: 'About Us', path: '/about', keywords: ['about', 'team', 'story', 'mission'] },
    { title: 'Cohorts', path: '/cohorts', keywords: ['cohorts', 'programs', 'courses', 'learning'] },
    { title: 'Events', path: '/events', keywords: ['events', 'workshops', 'activities'] },
    { title: 'Careers', path: '/careers', keywords: ['careers', 'jobs', 'opportunities', 'companies'] },
    { title: 'Mentors', path: '/mentors', keywords: ['mentors', 'coaches', 'guides', 'experts'] },
    { title: 'FAQs', path: '/faqs', keywords: ['faq', 'questions', 'help', 'support'] },
    { title: 'Contact', path: '/contact', keywords: ['contact', 'reach', 'email', 'message'] },
  ];

  const filteredPages = query.trim()
    ? searchablePages.filter((page) => {
        const searchText = query.toLowerCase();
        return (
          page.title.toLowerCase().includes(searchText) ||
          page.keywords.some((keyword) => keyword.includes(searchText))
        );
      })
    : searchablePages;

  const handleSelect = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0">
        <DialogHeader className="px-6 pt-6 pb-3">
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Search className="w-5 h-5 text-primary" />
            Quick Navigation
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-2">
          <Input
            placeholder="Search pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11"
            autoFocus
          />
        </div>
        <div className="max-h-[400px] overflow-y-auto pb-4">
          {filteredPages.length > 0 ? (
            <div className="space-y-1 px-2">
              {filteredPages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => handleSelect(page.path)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-secondary transition-fast text-left group"
                >
                  <span className="font-medium text-foreground">{page.title}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          ) : (
            <div className="px-6 py-8 text-center text-muted-foreground">
              No pages found
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
