import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SocialBar from "./socialBar"

// Original icon animation by https://jonsuh.com/hamburgers/

const Hamburger = styled.button`
  position: relative;
  top: 10px;
  left: -4vw;
  padding-top: 20px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  :hover {
    opacity: 0.7;
  }

  outline: none;

  @media (min-width: 699px) {
    display: none;
  }
`

const HamburgerBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const HamburgerInner = styled.span`
  top: 50%;
  margin-top: -2px;

  &, ::before, ::after {
    background-color: #000;

    width: 40px;
    height: 4px;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    content: "";
    display: block;
  }

  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  ::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
  }

  ::before {
    top: -10px;
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${props => (props.active && `
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    ::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
    }

    ::before {
      top: 0;
      transform: rotate(-90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                  transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  `
  )}
`

const HamburgerLink = styled(({ active, ...props }) => <Link {...props} />)`
  width: 200px;

  display: block;
  border: none;
  margin: 20px auto;

  font-family: inherit;
  font-size: 30px;
  text-decoration: none;
  color: black;
  text-align: center;

  :hover {
    cursor: pointer;
  }

  opacity: ${props => (props.active ? "1" : "0")};
  transition: opacity ${props => (props.active ? "0.7s" : "0s")};
  pointer-events: ${props => (props.active ? "auto" : "none")};
  transition-timing-function: ease-in;
`

const HamburgerSocialBarWrapper = styled.div`
  border-top: 1px solid #EEEEEE;
  padding-top: 5px;

  opacity: ${props => (props.active ? "1" : "0")};
  transition: opacity ${props => (props.active ? "0.7s" : "0s")};
  pointer-events: ${props => (props.active ? "auto" : "none")};
  transition-timing-function: ease-in;
`

const HamburgerLinksCluster = styled.div`
  margin-top: 100px;
  pointer-events: ${props => (props.active ? "auto" : "none")};
`

const HamburgerMenu = styled.div`
    background-color: white;
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0px;
    height: ${props => (props.active ? "calc(100% - 49px)" : "0%")};
    box-shadow: ${props => (props.active ? "0 4px 4px -4px rgba(0, 0, 0, 0.1)" : "none")};
    transition: height .32s, box-shadow .32s};
    transition-timing-function: ease;
    z-index: 5;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 699px) {
      display: none;
    }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }

    this.handleClick = () => {
      document.body.style.position = this.state.isActive ? "static" : "fixed"
      this.setState(state => ({
        isActive: !state.isActive,
      }))
    }
  }

  componentWillUnmount() {
    document.body.style.position = "static"
  }

  render() {
    return (
      <React.Fragment>
        <Hamburger onClick={this.handleClick}>
          <HamburgerBox>
            <HamburgerInner active={this.state.isActive} />
          </HamburgerBox>
        </Hamburger>
        <HamburgerMenu active={this.state.isActive}>
          <HamburgerLinksCluster active={this.state.isActive}>
            <HamburgerLink
              onClick={this.handleClick}
              to="/"
              active={this.state.isActive}
            >
            Work
            </HamburgerLink>
            <HamburgerLink
              onClick={this.handleClick}
              to="/under_construction/"
              active={this.state.isActive}
            >
            About
            </HamburgerLink>
          </HamburgerLinksCluster>
          <HamburgerSocialBarWrapper active={this.state.isActive}>
            <SocialBar />
          </HamburgerSocialBarWrapper>
        </HamburgerMenu>
      </React.Fragment>
    )
  }
}
