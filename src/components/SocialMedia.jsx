import React from 'react'

const SocialMedia = () => {
  return (
      <>
          <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl text-neutral-900 mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                  <a
                      href="https://www.facebook.com/share/1Q68NS2ECq/"
                      className="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                  >
                      <img
                          src={"/logos/fb.png"}
                          alt="facebook"
                          className="h-8 w-8"
                      />
                      <span className="text-neutral-700">Facebook</span>
                  </a>
                  <a
                      href="#"
                      className="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                  >
                      <img
                          src={"/logos/X.png"}
                          alt="X logo"
                          className="h-8 w-8"
                      />
                      <span className="text-neutral-700">X</span>
                  </a>
                  <a
                      href="https://www.instagram.com/beacon_compasion?igsh=YW45aGc4dzUzemNv"
                      className="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                  >
                      <img
                          src={"/logos/insta.png"}
                          alt="X logo"
                          className="h-8 w-8"
                      />
                      <span className="text-neutral-700">Instagram</span>
                  </a>
                  <a
                      href="#"
                      className="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                  >
                      <img
                          src={"/logos/linkedin.png"}
                          alt="X logo"
                          className="h-8 w-8"
                      />
                      <span className="text-neutral-700">LinkedIn</span>
                  </a>
              </div>
          </div>
      </>
  );
}

export default SocialMedia