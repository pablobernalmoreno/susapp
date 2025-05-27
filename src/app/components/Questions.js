"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Pagination,
  Paper,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
} from "@mui/material";

const questions = [
  {
    id: 0,
    question: "Question 1",
    options: [
      {
        id: 0,
        label: "A",
        type: "correct",
        reason: "Because it is A",
      },
      {
        id: 1,
        label: "B",
        type: "incorrect",
        reason: "Because it is not A",
      },
      {
        id: 2,
        label: "C",
        type: "incorrect",
        reason: "Because it is not A",
      },
      {
        id: 3,
        label: "D",
        type: "incorrect",
        reason: "Because it is not A",
      },
    ],
  },
  {
    id: 1,
    question: "Question 2",
    options: [
      {
        id: 0,
        label: "A",
        type: "incorrect",
        reason: "Because it is not B",
      },
      {
        id: 1,
        label: "B",
        type: "correct",
        reason: "Because it is B",
      },
      {
        id: 2,
        label: "C",
        type: "incorrect",
        reason: "Because it is not B",
      },
      {
        id: 3,
        label: "D",
        type: "incorrect",
        reason: "Because it is not B",
      },
    ],
  },
];

export const Questions = () => {
  const [page, setPage] = useState(1);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const handleOptionsChange = (event) => {
    const selected = selectedQuestion?.options?.find(
      (option) => option?.label === event?.target?.value
    );
    setValue(event?.target?.value);
    setSelectedOption(selected);
    setCanGoForward(selectedOption?.type === "incorrect");
  };

  const handlePaginationChange = (event, value) => {
    setPage(value);
    setSelectedQuestion(questions[value - 1]);
    setValue("");
    setSelectedOption("");
  };

  const handleAccordionExpand = () => {
    setExpanded((expanded) => !expanded);
  };

  const getSeverity = (type) => {
    switch (type) {
      case "correct":
        return "success";
      case "incorrect":
        return "error";
      default:
        return "";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {selectedQuestion?.question}
        </Typography>
        <FormControl>
          <RadioGroup value={value} onChange={handleOptionsChange}>
            {selectedQuestion?.options?.map((option) => {
              return (
                <FormControlLabel
                  key={option?.id}
                  value={option?.label}
                  control={<Radio />}
                  label={option?.label}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <Accordion expanded={expanded} onChange={handleAccordionExpand}>
          <AccordionSummary>
            <Typography component="span">Check Answer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Alert severity={getSeverity(selectedOption?.type)}>
              {selectedOption?.reason}
            </Alert>
          </AccordionDetails>
        </Accordion>
        <Pagination
          count={questions?.length}
          page={page}
          onChange={handlePaginationChange}
          //TODO WORK FOR ACTUAL TESTS
          // renderItem={(item) => {
          //   if (item?.type === "previous" || item.type === "page") {
          //     return <PaginationItem {...item} disabled />;
          //   }
          //   if (item.type === "next") {
          //     return <PaginationItem {...item} disabled={!canGoForward} />;
          //   }

          //   return <PaginationItem {...item} />;
          // }}
        />
      </Paper>
    </Box>
  );
};
