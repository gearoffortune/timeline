import { TimelineEvent } from "../../types/events";
import { ViewConfiguration } from "../../types";

export type Hitbox = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export abstract class AbstractEventRenderer {
  public abstract render(
    ctx: CanvasRenderingContext2D,
    event: TimelineEvent,
    isSelected: boolean,
    x0: number,
    x1: number,
    y: number,
    h: number,
    viewConfiguration: ViewConfiguration,
    timeToPosition?: (n: number) => number,
  ): void;

  protected hitboxResult: Hitbox = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  public abstract getHitbox(
    event: TimelineEvent,
    x0: number,
    x1: number,
  ): Hitbox;
}
