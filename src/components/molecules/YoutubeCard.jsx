import { Dialog, Transition } from "@headlessui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";
import React, { Fragment, useRef, useState } from "react";

function YoutubeCard() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <Fragment>
      <div
        className="cursor-pointer"
        onClick={() => setOpen(true)}
        title="Something for your mind...."
      >
        <Player
          autoplay
          loop
          src="lottie/lf30_editor_tsww9nco.json"
          style={{ width: "100%" }}
        />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube-nocookie.com/embed/RPS-Cq4uMFs?autoplay=1&controls=0"
                      title="Black Hole Baby"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
}

YoutubeCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default YoutubeCard;
