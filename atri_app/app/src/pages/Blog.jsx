import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex541Cb, useFlex542Cb, useFlex588Cb, useFlex586Cb, useFlex581Cb, useFlex582Cb, useFlex575Cb, useFlex569Cb, useFlex576Cb, useFlex570Cb, useFlex577Cb, useFlex571Cb, useFlex587Cb, useFlex583Cb, useFlex578Cb, useFlex572Cb, useFlex566Cb, useFlex584Cb, useFlex579Cb, useFlex573Cb, useFlex567Cb, useFlex585Cb, useFlex580Cb, useFlex574Cb, useFlex568Cb, useFlex618Cb, useFlex615Cb, useFlex613Cb, useFlex614Cb, useFlex616Cb, useFlex617Cb, useButton58Cb, useTextBox887Cb, useTextBox888Cb, useTextBox889Cb, useTextBox890Cb, useImage401Cb, useTextBox930Cb, useTextBox931Cb, useTextBox927Cb, useTextBox928Cb, useTextBox929Cb, useImage414Cb, useTextBox915Cb, useTextBox916Cb, useImage415Cb, useTextBox917Cb, useTextBox918Cb, useImage416Cb, useTextBox919Cb, useTextBox920Cb, useTextBox932Cb, useImage417Cb, useTextBox921Cb, useTextBox922Cb, useImage411Cb, useTextBox912Cb, useImage418Cb, useTextBox923Cb, useTextBox924Cb, useImage412Cb, useTextBox913Cb, useImage419Cb, useTextBox925Cb, useTextBox926Cb, useImage413Cb, useTextBox914Cb, useImage444Cb, useImage440Cb, useImage441Cb, useImage442Cb, useImage443Cb, useTextBox965Cb, useTextBox966Cb, useTextBox967Cb, useTextBox968Cb, useTextBox969Cb, useTextBox970Cb, useTextBox971Cb, useTextBox972Cb } from "../page-cbs/blog";
import "../page-css/blog.css";
import "../custom/blog";

export default function Blog() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex541Props = useStore((state)=>state["blog"]["Flex541"]);
const Flex541IoProps = useIoStore((state)=>state["blog"]["Flex541"]);
const Flex541Cb = useFlex541Cb()
const Flex542Props = useStore((state)=>state["blog"]["Flex542"]);
const Flex542IoProps = useIoStore((state)=>state["blog"]["Flex542"]);
const Flex542Cb = useFlex542Cb()
const Flex588Props = useStore((state)=>state["blog"]["Flex588"]);
const Flex588IoProps = useIoStore((state)=>state["blog"]["Flex588"]);
const Flex588Cb = useFlex588Cb()
const Flex586Props = useStore((state)=>state["blog"]["Flex586"]);
const Flex586IoProps = useIoStore((state)=>state["blog"]["Flex586"]);
const Flex586Cb = useFlex586Cb()
const Flex581Props = useStore((state)=>state["blog"]["Flex581"]);
const Flex581IoProps = useIoStore((state)=>state["blog"]["Flex581"]);
const Flex581Cb = useFlex581Cb()
const Flex582Props = useStore((state)=>state["blog"]["Flex582"]);
const Flex582IoProps = useIoStore((state)=>state["blog"]["Flex582"]);
const Flex582Cb = useFlex582Cb()
const Flex575Props = useStore((state)=>state["blog"]["Flex575"]);
const Flex575IoProps = useIoStore((state)=>state["blog"]["Flex575"]);
const Flex575Cb = useFlex575Cb()
const Flex569Props = useStore((state)=>state["blog"]["Flex569"]);
const Flex569IoProps = useIoStore((state)=>state["blog"]["Flex569"]);
const Flex569Cb = useFlex569Cb()
const Flex576Props = useStore((state)=>state["blog"]["Flex576"]);
const Flex576IoProps = useIoStore((state)=>state["blog"]["Flex576"]);
const Flex576Cb = useFlex576Cb()
const Flex570Props = useStore((state)=>state["blog"]["Flex570"]);
const Flex570IoProps = useIoStore((state)=>state["blog"]["Flex570"]);
const Flex570Cb = useFlex570Cb()
const Flex577Props = useStore((state)=>state["blog"]["Flex577"]);
const Flex577IoProps = useIoStore((state)=>state["blog"]["Flex577"]);
const Flex577Cb = useFlex577Cb()
const Flex571Props = useStore((state)=>state["blog"]["Flex571"]);
const Flex571IoProps = useIoStore((state)=>state["blog"]["Flex571"]);
const Flex571Cb = useFlex571Cb()
const Flex587Props = useStore((state)=>state["blog"]["Flex587"]);
const Flex587IoProps = useIoStore((state)=>state["blog"]["Flex587"]);
const Flex587Cb = useFlex587Cb()
const Flex583Props = useStore((state)=>state["blog"]["Flex583"]);
const Flex583IoProps = useIoStore((state)=>state["blog"]["Flex583"]);
const Flex583Cb = useFlex583Cb()
const Flex578Props = useStore((state)=>state["blog"]["Flex578"]);
const Flex578IoProps = useIoStore((state)=>state["blog"]["Flex578"]);
const Flex578Cb = useFlex578Cb()
const Flex572Props = useStore((state)=>state["blog"]["Flex572"]);
const Flex572IoProps = useIoStore((state)=>state["blog"]["Flex572"]);
const Flex572Cb = useFlex572Cb()
const Flex566Props = useStore((state)=>state["blog"]["Flex566"]);
const Flex566IoProps = useIoStore((state)=>state["blog"]["Flex566"]);
const Flex566Cb = useFlex566Cb()
const Flex584Props = useStore((state)=>state["blog"]["Flex584"]);
const Flex584IoProps = useIoStore((state)=>state["blog"]["Flex584"]);
const Flex584Cb = useFlex584Cb()
const Flex579Props = useStore((state)=>state["blog"]["Flex579"]);
const Flex579IoProps = useIoStore((state)=>state["blog"]["Flex579"]);
const Flex579Cb = useFlex579Cb()
const Flex573Props = useStore((state)=>state["blog"]["Flex573"]);
const Flex573IoProps = useIoStore((state)=>state["blog"]["Flex573"]);
const Flex573Cb = useFlex573Cb()
const Flex567Props = useStore((state)=>state["blog"]["Flex567"]);
const Flex567IoProps = useIoStore((state)=>state["blog"]["Flex567"]);
const Flex567Cb = useFlex567Cb()
const Flex585Props = useStore((state)=>state["blog"]["Flex585"]);
const Flex585IoProps = useIoStore((state)=>state["blog"]["Flex585"]);
const Flex585Cb = useFlex585Cb()
const Flex580Props = useStore((state)=>state["blog"]["Flex580"]);
const Flex580IoProps = useIoStore((state)=>state["blog"]["Flex580"]);
const Flex580Cb = useFlex580Cb()
const Flex574Props = useStore((state)=>state["blog"]["Flex574"]);
const Flex574IoProps = useIoStore((state)=>state["blog"]["Flex574"]);
const Flex574Cb = useFlex574Cb()
const Flex568Props = useStore((state)=>state["blog"]["Flex568"]);
const Flex568IoProps = useIoStore((state)=>state["blog"]["Flex568"]);
const Flex568Cb = useFlex568Cb()
const Flex618Props = useStore((state)=>state["blog"]["Flex618"]);
const Flex618IoProps = useIoStore((state)=>state["blog"]["Flex618"]);
const Flex618Cb = useFlex618Cb()
const Flex615Props = useStore((state)=>state["blog"]["Flex615"]);
const Flex615IoProps = useIoStore((state)=>state["blog"]["Flex615"]);
const Flex615Cb = useFlex615Cb()
const Flex613Props = useStore((state)=>state["blog"]["Flex613"]);
const Flex613IoProps = useIoStore((state)=>state["blog"]["Flex613"]);
const Flex613Cb = useFlex613Cb()
const Flex614Props = useStore((state)=>state["blog"]["Flex614"]);
const Flex614IoProps = useIoStore((state)=>state["blog"]["Flex614"]);
const Flex614Cb = useFlex614Cb()
const Flex616Props = useStore((state)=>state["blog"]["Flex616"]);
const Flex616IoProps = useIoStore((state)=>state["blog"]["Flex616"]);
const Flex616Cb = useFlex616Cb()
const Flex617Props = useStore((state)=>state["blog"]["Flex617"]);
const Flex617IoProps = useIoStore((state)=>state["blog"]["Flex617"]);
const Flex617Cb = useFlex617Cb()
const Button58Props = useStore((state)=>state["blog"]["Button58"]);
const Button58IoProps = useIoStore((state)=>state["blog"]["Button58"]);
const Button58Cb = useButton58Cb()
const TextBox887Props = useStore((state)=>state["blog"]["TextBox887"]);
const TextBox887IoProps = useIoStore((state)=>state["blog"]["TextBox887"]);
const TextBox887Cb = useTextBox887Cb()
const TextBox888Props = useStore((state)=>state["blog"]["TextBox888"]);
const TextBox888IoProps = useIoStore((state)=>state["blog"]["TextBox888"]);
const TextBox888Cb = useTextBox888Cb()
const TextBox889Props = useStore((state)=>state["blog"]["TextBox889"]);
const TextBox889IoProps = useIoStore((state)=>state["blog"]["TextBox889"]);
const TextBox889Cb = useTextBox889Cb()
const TextBox890Props = useStore((state)=>state["blog"]["TextBox890"]);
const TextBox890IoProps = useIoStore((state)=>state["blog"]["TextBox890"]);
const TextBox890Cb = useTextBox890Cb()
const Image401Props = useStore((state)=>state["blog"]["Image401"]);
const Image401IoProps = useIoStore((state)=>state["blog"]["Image401"]);
const Image401Cb = useImage401Cb()
const TextBox930Props = useStore((state)=>state["blog"]["TextBox930"]);
const TextBox930IoProps = useIoStore((state)=>state["blog"]["TextBox930"]);
const TextBox930Cb = useTextBox930Cb()
const TextBox931Props = useStore((state)=>state["blog"]["TextBox931"]);
const TextBox931IoProps = useIoStore((state)=>state["blog"]["TextBox931"]);
const TextBox931Cb = useTextBox931Cb()
const TextBox927Props = useStore((state)=>state["blog"]["TextBox927"]);
const TextBox927IoProps = useIoStore((state)=>state["blog"]["TextBox927"]);
const TextBox927Cb = useTextBox927Cb()
const TextBox928Props = useStore((state)=>state["blog"]["TextBox928"]);
const TextBox928IoProps = useIoStore((state)=>state["blog"]["TextBox928"]);
const TextBox928Cb = useTextBox928Cb()
const TextBox929Props = useStore((state)=>state["blog"]["TextBox929"]);
const TextBox929IoProps = useIoStore((state)=>state["blog"]["TextBox929"]);
const TextBox929Cb = useTextBox929Cb()
const Image414Props = useStore((state)=>state["blog"]["Image414"]);
const Image414IoProps = useIoStore((state)=>state["blog"]["Image414"]);
const Image414Cb = useImage414Cb()
const TextBox915Props = useStore((state)=>state["blog"]["TextBox915"]);
const TextBox915IoProps = useIoStore((state)=>state["blog"]["TextBox915"]);
const TextBox915Cb = useTextBox915Cb()
const TextBox916Props = useStore((state)=>state["blog"]["TextBox916"]);
const TextBox916IoProps = useIoStore((state)=>state["blog"]["TextBox916"]);
const TextBox916Cb = useTextBox916Cb()
const Image415Props = useStore((state)=>state["blog"]["Image415"]);
const Image415IoProps = useIoStore((state)=>state["blog"]["Image415"]);
const Image415Cb = useImage415Cb()
const TextBox917Props = useStore((state)=>state["blog"]["TextBox917"]);
const TextBox917IoProps = useIoStore((state)=>state["blog"]["TextBox917"]);
const TextBox917Cb = useTextBox917Cb()
const TextBox918Props = useStore((state)=>state["blog"]["TextBox918"]);
const TextBox918IoProps = useIoStore((state)=>state["blog"]["TextBox918"]);
const TextBox918Cb = useTextBox918Cb()
const Image416Props = useStore((state)=>state["blog"]["Image416"]);
const Image416IoProps = useIoStore((state)=>state["blog"]["Image416"]);
const Image416Cb = useImage416Cb()
const TextBox919Props = useStore((state)=>state["blog"]["TextBox919"]);
const TextBox919IoProps = useIoStore((state)=>state["blog"]["TextBox919"]);
const TextBox919Cb = useTextBox919Cb()
const TextBox920Props = useStore((state)=>state["blog"]["TextBox920"]);
const TextBox920IoProps = useIoStore((state)=>state["blog"]["TextBox920"]);
const TextBox920Cb = useTextBox920Cb()
const TextBox932Props = useStore((state)=>state["blog"]["TextBox932"]);
const TextBox932IoProps = useIoStore((state)=>state["blog"]["TextBox932"]);
const TextBox932Cb = useTextBox932Cb()
const Image417Props = useStore((state)=>state["blog"]["Image417"]);
const Image417IoProps = useIoStore((state)=>state["blog"]["Image417"]);
const Image417Cb = useImage417Cb()
const TextBox921Props = useStore((state)=>state["blog"]["TextBox921"]);
const TextBox921IoProps = useIoStore((state)=>state["blog"]["TextBox921"]);
const TextBox921Cb = useTextBox921Cb()
const TextBox922Props = useStore((state)=>state["blog"]["TextBox922"]);
const TextBox922IoProps = useIoStore((state)=>state["blog"]["TextBox922"]);
const TextBox922Cb = useTextBox922Cb()
const Image411Props = useStore((state)=>state["blog"]["Image411"]);
const Image411IoProps = useIoStore((state)=>state["blog"]["Image411"]);
const Image411Cb = useImage411Cb()
const TextBox912Props = useStore((state)=>state["blog"]["TextBox912"]);
const TextBox912IoProps = useIoStore((state)=>state["blog"]["TextBox912"]);
const TextBox912Cb = useTextBox912Cb()
const Image418Props = useStore((state)=>state["blog"]["Image418"]);
const Image418IoProps = useIoStore((state)=>state["blog"]["Image418"]);
const Image418Cb = useImage418Cb()
const TextBox923Props = useStore((state)=>state["blog"]["TextBox923"]);
const TextBox923IoProps = useIoStore((state)=>state["blog"]["TextBox923"]);
const TextBox923Cb = useTextBox923Cb()
const TextBox924Props = useStore((state)=>state["blog"]["TextBox924"]);
const TextBox924IoProps = useIoStore((state)=>state["blog"]["TextBox924"]);
const TextBox924Cb = useTextBox924Cb()
const Image412Props = useStore((state)=>state["blog"]["Image412"]);
const Image412IoProps = useIoStore((state)=>state["blog"]["Image412"]);
const Image412Cb = useImage412Cb()
const TextBox913Props = useStore((state)=>state["blog"]["TextBox913"]);
const TextBox913IoProps = useIoStore((state)=>state["blog"]["TextBox913"]);
const TextBox913Cb = useTextBox913Cb()
const Image419Props = useStore((state)=>state["blog"]["Image419"]);
const Image419IoProps = useIoStore((state)=>state["blog"]["Image419"]);
const Image419Cb = useImage419Cb()
const TextBox925Props = useStore((state)=>state["blog"]["TextBox925"]);
const TextBox925IoProps = useIoStore((state)=>state["blog"]["TextBox925"]);
const TextBox925Cb = useTextBox925Cb()
const TextBox926Props = useStore((state)=>state["blog"]["TextBox926"]);
const TextBox926IoProps = useIoStore((state)=>state["blog"]["TextBox926"]);
const TextBox926Cb = useTextBox926Cb()
const Image413Props = useStore((state)=>state["blog"]["Image413"]);
const Image413IoProps = useIoStore((state)=>state["blog"]["Image413"]);
const Image413Cb = useImage413Cb()
const TextBox914Props = useStore((state)=>state["blog"]["TextBox914"]);
const TextBox914IoProps = useIoStore((state)=>state["blog"]["TextBox914"]);
const TextBox914Cb = useTextBox914Cb()
const Image444Props = useStore((state)=>state["blog"]["Image444"]);
const Image444IoProps = useIoStore((state)=>state["blog"]["Image444"]);
const Image444Cb = useImage444Cb()
const Image440Props = useStore((state)=>state["blog"]["Image440"]);
const Image440IoProps = useIoStore((state)=>state["blog"]["Image440"]);
const Image440Cb = useImage440Cb()
const Image441Props = useStore((state)=>state["blog"]["Image441"]);
const Image441IoProps = useIoStore((state)=>state["blog"]["Image441"]);
const Image441Cb = useImage441Cb()
const Image442Props = useStore((state)=>state["blog"]["Image442"]);
const Image442IoProps = useIoStore((state)=>state["blog"]["Image442"]);
const Image442Cb = useImage442Cb()
const Image443Props = useStore((state)=>state["blog"]["Image443"]);
const Image443IoProps = useIoStore((state)=>state["blog"]["Image443"]);
const Image443Cb = useImage443Cb()
const TextBox965Props = useStore((state)=>state["blog"]["TextBox965"]);
const TextBox965IoProps = useIoStore((state)=>state["blog"]["TextBox965"]);
const TextBox965Cb = useTextBox965Cb()
const TextBox966Props = useStore((state)=>state["blog"]["TextBox966"]);
const TextBox966IoProps = useIoStore((state)=>state["blog"]["TextBox966"]);
const TextBox966Cb = useTextBox966Cb()
const TextBox967Props = useStore((state)=>state["blog"]["TextBox967"]);
const TextBox967IoProps = useIoStore((state)=>state["blog"]["TextBox967"]);
const TextBox967Cb = useTextBox967Cb()
const TextBox968Props = useStore((state)=>state["blog"]["TextBox968"]);
const TextBox968IoProps = useIoStore((state)=>state["blog"]["TextBox968"]);
const TextBox968Cb = useTextBox968Cb()
const TextBox969Props = useStore((state)=>state["blog"]["TextBox969"]);
const TextBox969IoProps = useIoStore((state)=>state["blog"]["TextBox969"]);
const TextBox969Cb = useTextBox969Cb()
const TextBox970Props = useStore((state)=>state["blog"]["TextBox970"]);
const TextBox970IoProps = useIoStore((state)=>state["blog"]["TextBox970"]);
const TextBox970Cb = useTextBox970Cb()
const TextBox971Props = useStore((state)=>state["blog"]["TextBox971"]);
const TextBox971IoProps = useIoStore((state)=>state["blog"]["TextBox971"]);
const TextBox971Cb = useTextBox971Cb()
const TextBox972Props = useStore((state)=>state["blog"]["TextBox972"]);
const TextBox972IoProps = useIoStore((state)=>state["blog"]["TextBox972"]);
const TextBox972Cb = useTextBox972Cb()

  return (<>
  <Flex1 className="p-blog Flex541 bpt" {...Flex541Props} {...Flex541Cb} {...Flex541IoProps}>
<Flex1 className="p-blog Flex542 bpt" {...Flex542Props} {...Flex542Cb} {...Flex542IoProps}>
<Image1 className="p-blog Image401 bpt" {...Image401Props} {...Image401Cb} {...Image401IoProps}/>
<TextBox1 className="p-blog TextBox890 bpt" {...TextBox890Props} {...TextBox890Cb} {...TextBox890IoProps}/>
<TextBox1 className="p-blog TextBox889 bpt" {...TextBox889Props} {...TextBox889Cb} {...TextBox889IoProps}/>
<TextBox1 className="p-blog TextBox888 bpt" {...TextBox888Props} {...TextBox888Cb} {...TextBox888IoProps}/>
<TextBox1 className="p-blog TextBox887 bpt" {...TextBox887Props} {...TextBox887Cb} {...TextBox887IoProps}/>
<Button1 className="p-blog Button58 bpt" {...Button58Props} {...Button58Cb} {...Button58IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex588 bpt" {...Flex588Props} {...Flex588Cb} {...Flex588IoProps}>
<Flex1 className="p-blog Flex587 bpt" {...Flex587Props} {...Flex587Cb} {...Flex587IoProps}>
<TextBox1 className="p-blog TextBox932 bpt" {...TextBox932Props} {...TextBox932Cb} {...TextBox932IoProps}/>
<Flex1 className="p-blog Flex585 bpt" {...Flex585Props} {...Flex585Cb} {...Flex585IoProps}>
<Image1 className="p-blog Image419 bpt" {...Image419Props} {...Image419Cb} {...Image419IoProps}/>
<Flex1 className="p-blog Flex580 bpt" {...Flex580Props} {...Flex580Cb} {...Flex580IoProps}>
<TextBox1 className="p-blog TextBox926 bpt" {...TextBox926Props} {...TextBox926Cb} {...TextBox926IoProps}/>
<TextBox1 className="p-blog TextBox925 bpt" {...TextBox925Props} {...TextBox925Cb} {...TextBox925IoProps}/>
<Flex1 className="p-blog Flex574 bpt" {...Flex574Props} {...Flex574Cb} {...Flex574IoProps}>
<Image1 className="p-blog Image413 bpt" {...Image413Props} {...Image413Cb} {...Image413IoProps}/>
<Flex1 className="p-blog Flex568 bpt" {...Flex568Props} {...Flex568Cb} {...Flex568IoProps}>
<TextBox1 className="p-blog TextBox914 bpt" {...TextBox914Props} {...TextBox914Cb} {...TextBox914IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex584 bpt" {...Flex584Props} {...Flex584Cb} {...Flex584IoProps}>
<Image1 className="p-blog Image418 bpt" {...Image418Props} {...Image418Cb} {...Image418IoProps}/>
<Flex1 className="p-blog Flex579 bpt" {...Flex579Props} {...Flex579Cb} {...Flex579IoProps}>
<TextBox1 className="p-blog TextBox923 bpt" {...TextBox923Props} {...TextBox923Cb} {...TextBox923IoProps}/>
<TextBox1 className="p-blog TextBox924 bpt" {...TextBox924Props} {...TextBox924Cb} {...TextBox924IoProps}/>
<Flex1 className="p-blog Flex573 bpt" {...Flex573Props} {...Flex573Cb} {...Flex573IoProps}>
<Image1 className="p-blog Image412 bpt" {...Image412Props} {...Image412Cb} {...Image412IoProps}/>
<Flex1 className="p-blog Flex567 bpt" {...Flex567Props} {...Flex567Cb} {...Flex567IoProps}>
<TextBox1 className="p-blog TextBox913 bpt" {...TextBox913Props} {...TextBox913Cb} {...TextBox913IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex583 bpt" {...Flex583Props} {...Flex583Cb} {...Flex583IoProps}>
<Image1 className="p-blog Image417 bpt" {...Image417Props} {...Image417Cb} {...Image417IoProps}/>
<Flex1 className="p-blog Flex578 bpt" {...Flex578Props} {...Flex578Cb} {...Flex578IoProps}>
<TextBox1 className="p-blog TextBox921 bpt" {...TextBox921Props} {...TextBox921Cb} {...TextBox921IoProps}/>
<TextBox1 className="p-blog TextBox922 bpt" {...TextBox922Props} {...TextBox922Cb} {...TextBox922IoProps}/>
<Flex1 className="p-blog Flex572 bpt" {...Flex572Props} {...Flex572Cb} {...Flex572IoProps}>
<Image1 className="p-blog Image411 bpt" {...Image411Props} {...Image411Cb} {...Image411IoProps}/>
<Flex1 className="p-blog Flex566 bpt" {...Flex566Props} {...Flex566Cb} {...Flex566IoProps}>
<TextBox1 className="p-blog TextBox912 bpt" {...TextBox912Props} {...TextBox912Cb} {...TextBox912IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex586 bpt" {...Flex586Props} {...Flex586Cb} {...Flex586IoProps}>
<TextBox1 className="p-blog TextBox931 bpt" {...TextBox931Props} {...TextBox931Cb} {...TextBox931IoProps}/>
<Flex1 className="p-blog Flex582 bpt" {...Flex582Props} {...Flex582Cb} {...Flex582IoProps}>
<Flex1 className="p-blog Flex577 bpt" {...Flex577Props} {...Flex577Cb} {...Flex577IoProps}>
<Image1 className="p-blog Image416 bpt" {...Image416Props} {...Image416Cb} {...Image416IoProps}/>
<Flex1 className="p-blog Flex571 bpt" {...Flex571Props} {...Flex571Cb} {...Flex571IoProps}>
<TextBox1 className="p-blog TextBox920 bpt" {...TextBox920Props} {...TextBox920Cb} {...TextBox920IoProps}/>
<TextBox1 className="p-blog TextBox919 bpt" {...TextBox919Props} {...TextBox919Cb} {...TextBox919IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex576 bpt" {...Flex576Props} {...Flex576Cb} {...Flex576IoProps}>
<Image1 className="p-blog Image415 bpt" {...Image415Props} {...Image415Cb} {...Image415IoProps}/>
<Flex1 className="p-blog Flex570 bpt" {...Flex570Props} {...Flex570Cb} {...Flex570IoProps}>
<TextBox1 className="p-blog TextBox917 bpt" {...TextBox917Props} {...TextBox917Cb} {...TextBox917IoProps}/>
<TextBox1 className="p-blog TextBox918 bpt" {...TextBox918Props} {...TextBox918Cb} {...TextBox918IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex575 bpt" {...Flex575Props} {...Flex575Cb} {...Flex575IoProps}>
<Image1 className="p-blog Image414 bpt" {...Image414Props} {...Image414Cb} {...Image414IoProps}/>
<Flex1 className="p-blog Flex569 bpt" {...Flex569Props} {...Flex569Cb} {...Flex569IoProps}>
<TextBox1 className="p-blog TextBox915 bpt" {...TextBox915Props} {...TextBox915Cb} {...TextBox915IoProps}/>
<TextBox1 className="p-blog TextBox916 bpt" {...TextBox916Props} {...TextBox916Cb} {...TextBox916IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<TextBox1 className="p-blog TextBox930 bpt" {...TextBox930Props} {...TextBox930Cb} {...TextBox930IoProps}/>
<Flex1 className="p-blog Flex581 bpt" {...Flex581Props} {...Flex581Cb} {...Flex581IoProps}>
<TextBox1 className="p-blog TextBox929 bpt" {...TextBox929Props} {...TextBox929Cb} {...TextBox929IoProps}/>
<TextBox1 className="p-blog TextBox928 bpt" {...TextBox928Props} {...TextBox928Cb} {...TextBox928IoProps}/>
<TextBox1 className="p-blog TextBox927 bpt" {...TextBox927Props} {...TextBox927Cb} {...TextBox927IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex618 bpt" {...Flex618Props} {...Flex618Cb} {...Flex618IoProps}>
<Flex1 className="p-blog Flex615 bpt" {...Flex615Props} {...Flex615Cb} {...Flex615IoProps}>
<Flex1 className="p-blog Flex614 bpt" {...Flex614Props} {...Flex614Cb} {...Flex614IoProps}>
<Image1 className="p-blog Image443 bpt" {...Image443Props} {...Image443Cb} {...Image443IoProps}/>
</Flex1>
<Flex1 className="p-blog Flex613 bpt" {...Flex613Props} {...Flex613Cb} {...Flex613IoProps}>
<Image1 className="p-blog Image440 bpt" {...Image440Props} {...Image440Cb} {...Image440IoProps}/>
<Image1 className="p-blog Image441 bpt" {...Image441Props} {...Image441Cb} {...Image441IoProps}/>
<Image1 className="p-blog Image442 bpt" {...Image442Props} {...Image442Cb} {...Image442IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex616 bpt" {...Flex616Props} {...Flex616Cb} {...Flex616IoProps}>
<TextBox1 className="p-blog TextBox966 bpt" {...TextBox966Props} {...TextBox966Cb} {...TextBox966IoProps}/>
<TextBox1 className="p-blog TextBox967 bpt" {...TextBox967Props} {...TextBox967Cb} {...TextBox967IoProps}/>
<TextBox1 className="p-blog TextBox968 bpt" {...TextBox968Props} {...TextBox968Cb} {...TextBox968IoProps}/>
<TextBox1 className="p-blog TextBox965 bpt" {...TextBox965Props} {...TextBox965Cb} {...TextBox965IoProps}/>
</Flex1>
<Flex1 className="p-blog Flex617 bpt" {...Flex617Props} {...Flex617Cb} {...Flex617IoProps}>
<TextBox1 className="p-blog TextBox970 bpt" {...TextBox970Props} {...TextBox970Cb} {...TextBox970IoProps}/>
<TextBox1 className="p-blog TextBox971 bpt" {...TextBox971Props} {...TextBox971Cb} {...TextBox971IoProps}/>
<TextBox1 className="p-blog TextBox972 bpt" {...TextBox972Props} {...TextBox972Cb} {...TextBox972IoProps}/>
<TextBox1 className="p-blog TextBox969 bpt" {...TextBox969Props} {...TextBox969Cb} {...TextBox969IoProps}/>
</Flex1>
<Image1 className="p-blog Image444 bpt" {...Image444Props} {...Image444Cb} {...Image444IoProps}/>
</Flex1>
  </>);
}
