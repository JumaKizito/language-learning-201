import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Badge, Stack } from "react-bootstrap";
import { Principal } from "@dfinity/principal";
import { Link } from "react-router-dom";
import UpdateLanguage from "./UpdateLanguage";
import Enroll from "./Enroll";

const Language = ({ language, update }) => {
  const { id, name, duration, fee } = language;

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 position-relative">
        <Card.Body>
          <div className="position-absolute top-0 end-0">
            <UpdateLanguage save={update} />
          </div>
          <Card.Text>
            <Card.Title>{name}</Card.Title>
            <Badge>{id}</Badge>
            <Stack direction="horizontal" gap={3}>
              <Badge>Duration: {duration}</Badge>
              <Badge>Fee: {fee}</Badge>
            </Stack>
            <Badge>{students}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

Language.propTypes = {
  language: PropTypes.object.isRequired,
};

export default Language;
