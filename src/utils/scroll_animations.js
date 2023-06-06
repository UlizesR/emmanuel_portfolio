
export function scroll_animation_1(tl, room, camera, chair) {
    tl.to(room.current.position, {
      x: -1.5,
      scrollTrigger: {
        trigger: '.second-section',
        start: 'top=400 bottom',
        end: 'top top',
        scrub: true,
        immediateRender: false,
        markers: true
      }
    })
    .to(room.current.rotation, {
      y: Math.PI / 4,
      scrollTrigger: {
        trigger: '.second-section',
        start: 'top=100 bottom',
        end: 'top top',
        scrub: true,
        immediateRender: false,
        markers: true
      }
    })
    .to(room.current.position, {
      x: -1.15,
      scrollTrigger: {
        trigger: '.second-section',
        start: 'top=400 bottom',
        end: 'top top',
        scrub: true,
        immediateRender: false,
        markers: true
      }
    })
    .to(camera.position, {
      y:3,
      z:5.5,
      scrollTrigger: {
        trigger: '.second-section',
        start: 'top+=400 bottom',
        end: 'top top',
        scrub: true,
        immediateRender: false,
        markers: true
      }
    })
    // .to(room.current.position, {
    //   z: 3.5,
    //   scrollTrigger: {
    //     trigger: '.second-section',
    //     start: 'top+=200 bottom',
    //     end: 'top top',
    //     scrub: true,
    //     immediateRender: false,
    //     markers: true
    //   }
    // })
    .to(chair.current.rotation, {
      y: Math.PI / 4,
      scrollTrigger: {
        trigger: '.second-section',
        start: 'top+=200 bottom',
        end: 'top top',
        scrub: true,
        immediateRender: false,
        markers: true
      }
    })
}

export function scroll_animation_2(tl, room, camera, chair) {
  tl
  .to(room.current.position, {
    x: -0.2,
    z: 2,
    scrollTrigger: {
      trigger: '.fourth-section',
      start: 'top-=1000 bottom',
      end: 'top top',
      scrub: true,
      immediateRender: false,
      markers: true
    }
  })
  .to(camera.position, {
    y:2.75,
    z:4.5,
    scrollTrigger: {
      trigger: '.fourth-section',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      immediateRender: false,
      markers: true
    }
  }).to(chair.current.rotation, {
    y: -Math.PI * 3/4,
    scrollTrigger: {
      trigger: '.fourth-section',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      immediateRender: false,
      markers: true
    }
  })
}