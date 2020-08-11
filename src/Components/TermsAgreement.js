import React, { useState } from "react";
import { Button, Segment, Modal } from "semantic-ui-react";

const TermsAgreement = (props) => {
  const [open, setOpen] = useState(false);
  const { check, checkValid, setCheck, setCheckValid } = props;

  return (
    <Segment>
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>Terms and Condition</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Enim aliqua eu fugiat cillum laboris reprehenderit fugiat incididunt
            veniam eiusmod est proident. Aliqua velit elit in aliqua
            adipisicing. Ut nisi laborum consectetur consectetur labore elit est
            excepteur labore qui dolore. Proident exercitation aliqua sit fugiat
            fugiat laboris quis sint occaecat commodo sunt cupidatat adipisicing
            commodo. Laborum id ut ut proident irure excepteur proident Lorem.
            Id eu culpa enim dolor. Duis adipisicing non consequat eiusmod
            aliqua irure in occaecat excepteur ex magna in irure consectetur.
            Adipisicing mollit deserunt adipisicing sunt amet laborum. Veniam
            excepteur ut ipsum ea nulla enim aliquip. Labore ullamco cupidatat
            elit nisi mollit non pariatur mollit. Sunt commodo commodo tempor
            Lorem incididunt. Nisi laborum voluptate aute consequat pariatur ex
            elit ipsum sit sint. Est nostrud sint est adipisicing dolor duis
            officia voluptate irure sint aliqua deserunt. Fugiat sunt do velit
            consequat sint adipisicing ullamco tempor culpa irure esse. Irure
            sit ipsum ut exercitation laboris. Sint et Lorem dolore magna.
            Voluptate voluptate quis nulla ullamco consequat enim. Duis ullamco
            esse ea tempor aliqua ad. Amet consectetur in velit ullamco dolor
            amet incididunt eiusmod veniam fugiat duis. Velit incididunt aliqua
            ullamco do ipsum. Duis irure aliquip officia anim eu. Nulla ullamco
            minim reprehenderit duis consequat veniam deserunt et sit magna
            velit. Sit sint incididunt labore dolor laborum eu exercitation
            cupidatat. Officia sint officia dolore labore irure exercitation ad
            proident pariatur minim in adipisicing. Commodo proident
            reprehenderit dolor ex. Laboris nulla ullamco consectetur veniam
            voluptate reprehenderit quis mollit ea tempor. Occaecat minim minim
            non fugiat. Officia dolore laborum elit consequat adipisicing
            nostrud excepteur id eiusmod et reprehenderit ea eu consectetur.
            Esse dolor elit pariatur nostrud sunt tempor cupidatat officia Lorem
            irure. Qui do magna irure tempor magna nulla ea ipsum deserunt elit.
            Fugiat occaecat Lorem in ex reprehenderit ipsum nostrud elit tempor
            ex tempor magna in. Eiusmod pariatur et aliquip eiusmod. Laboris
            Lorem cupidatat occaecat cupidatat id. Nisi irure ullamco
            adipisicing cupidatat duis Lorem non. Duis velit culpa mollit labore
            et amet culpa deserunt qui sit. Officia ad irure id do dolor
            laboris. Esse deserunt ex amet Lorem irure quis. In incididunt
            reprehenderit sunt est Lorem veniam sint exercitation laboris
            exercitation laborum. Irure aute sit sint consectetur duis culpa
            enim ut quis labore nulla irure veniam mollit. Duis deserunt elit
            consectetur ea duis ex cupidatat in tempor laboris velit. Id ipsum
            excepteur elit velit labore Lorem laboris. Aliqua officia est fugiat
            dolor ad ex aliqua fugiat nisi ut tempor tempor amet sunt. Voluptate
            Lorem laboris aliqua tempor consequat officia aliqua. Commodo
            ullamco ullamco incididunt officia amet. Ut reprehenderit incididunt
            proident cupidatat.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            onClick={() => {
              setOpen(false);
              setCheck(false);
            }}
          >
            Decline
          </Button>
          <Button
            color="green"
            onClick={() => {
              setOpen(false);
              setCheck(true);
            }}
          >
            Approve
          </Button>
        </Modal.Actions>
      </Modal>

      <input
        type="checkbox"
        id="termsConditionBox"
        name="termsConditionBox"
        onChange={() => {
          setCheck((prev) => !prev);
          if (!check) setCheckValid(true);
        }}
        checked={check}
      />
      <label>
        {" "}
        I accept the{" "}
        <a href="/#" onClick={() => setOpen(true)}>
          Terms and Condition
        </a>
      </label>
      {!checkValid && (
        <div
          className="ui left pointing prompt label"
          role="alert"
          aria-atomic="true"
        >
          You must agree to the terms and conditions
        </div>
      )}
    </Segment>
  );
};

export default TermsAgreement;
