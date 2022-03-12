import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1. Students learn better through experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            VR provides students an opportunity to learn through experience, in
            contrast to the traditional methods of reading and writing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>2. It has the ability to inspire</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Being able to see and experience extraordinary locations within the
            classroom is completely unique to VR and it is inspirational to
            students.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            3. Sparks the imagination and encourages creative thinking
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The immersive experience that VR provides is unparalleled in
            teaching. Students are “transported” out of the classroom and their
            imagination is allowed to flourish.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>4. Promotes peer interaction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Throughout the VR experience, students are encouraged to interact
            with each other. Afterwards, they are eager to share their thoughts
            and discuss their experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>5. Engages students</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Many students get bored with classic teaching methods. The modern
            technology of VR gets students’ attention like nothing else. We find
            that students instantly want to try out the VR
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>6. Provides realistic travel experiences</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Using VR, schools can provide students with travel experiences that
            would not be possible or practical. Schools can save time and money
            whilst providing students with incredible experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>7. Virtual Reality in the classroom is inclusive</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            With VR, every student gets the same opportunity to enjoy the
            experience. Unlike traditional school trips that can be too
            expensive for parents or too impractical for their children, VR is
            for all students.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            8. Offers memorable educational experiences
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Long after the VR has finished, students remember the experience and
            they are eager to reflect on it in future lessons.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
