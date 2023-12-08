import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, useTheme,TextField,Grid } from '@mui/material';
import Navbar from 'scenes/navbar';
import CopyToClipboard from 'react-copy-to-clipboard';
// ... (your imports)

const Quotecomponent = () => {
    const [Quotes, setQuotes] = useState([]);
    const [copied, setCopied] = useState(false); // State to track if text is copied
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const background = palette.background.jobs;
    const [shouldFetchData, setShouldFetchData] = useState(true);
  
    const fetchQuoteWithDelay = async () => {
      try {
        const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/', {
          headers: {
            'X-RapidAPI-Key': '0d4db12318msha567b0b5edf3383p15b244jsnae1843f994ed',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
          },
        });
  
        if (response.data) {
          setQuotes((prevQuotes) => [...prevQuotes, response.data]);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const fetchQuotesSequentially = async () => {
      const quotesToFetch = 10; // Number of quotes you want to fetch
  
      for (let i = 0; i < quotesToFetch; i++) {
        await fetchQuoteWithDelay();
        // Introduce a 1-second delay between each request
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };
  
    useEffect(() => {
      if (shouldFetchData) {
        fetchQuotesSequentially();
        setShouldFetchData(false);
      }
    }, [shouldFetchData]);
  
    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };
  
    return (
      <div>
        <Navbar/>
  
        {Quotes.map((quote) => (
          <Box
            key={quote.id}
            sx={{
              width: '82%',
              margin: 'auto',
              border: '1px solid #ccc',
              backgroundColor: { background },
              padding: '16px',
              marginBottom: '16px',
              borderRadius: '4px',
              position: 'relative',
            }}
          >
            <Typography variant="h5" color={dark}>
              {quote.content}
            </Typography>
            <Typography variant="h6" color={dark}>
              {quote.originator.name}
            </Typography>
  
            <CopyToClipboard text={quote.content} onCopy={handleCopy}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ position: 'absolute', top: '8px', right: '8px' }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </CopyToClipboard>
          </Box>
        ))}
      </div>
    );
  };
  
  export default Quotecomponent;